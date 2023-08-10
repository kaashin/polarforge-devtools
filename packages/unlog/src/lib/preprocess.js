import { preprocess, parse, walk } from 'svelte/compiler'
import doctrine from 'doctrine';
import MagicString from 'magic-string';
import fs from 'fs';
import path from 'path';

const ignoreFiles = [
  'Unlog.svelte',
  'UnlogEditor.svelte',
  'UnlogCss.svelte',
  'UnlogHistory.svelte',
  'UnlogDetails.svelte',
]

const parseImportMap = (importMap) => {
  return Object.entries(importMap)
    .filter(([_from, { imports }]) => imports.length > 0)
    .map(([module, { imports }]) => {
      return `import { ${[...new Set(imports)].join(', ')} } from '${module}';`
    })
    .join('\n')
}

const addImport = (importMap, module, imports) => {
  if (importMap[module]) {
    importMap[module] = {
      imports: [...importMap[module].imports, ...imports]
    }
  } else {
    importMap[module] = {
      imports
    }
  }
}

function processFile(file) {
  let check = false;
  for (let i = 0; i < ignoreFiles.length; i++) {
    check = file.includes(ignoreFiles[i])

    if (check) {
      break;
    }
  }

  return !check;
}

export function kPreprocess() {
  return {
    name: 'kuikPreprocess',
    markup: ({ content, filename }) => {
      const ast = parse(content)
      const markup = new MagicString(content);
      // console.log({ filename }, processFile(filename))

      if (processFile(filename)) {

        // console.log({ filename })
        const componentProps = {
          filename,
          filepath: path.dirname(filename),
          component: path.basename(filename, path.extname(filename)),
          props: []
        };

        const documentImportMap = {};
        const addImportMap = {};

        let scriptContentNode = { start: undefined, end: undefined }

        walk(ast, {
          enter(node, parent, prop, index) {
            // Find the script tag and one that is not a context module
            if (node.type === 'Script' && node.context === 'default') {
              scriptContentNode = node.content
            }
            if (node.type === 'ImportDeclaration') {
              addImport(
                documentImportMap,
                node.source.value,
                node.specifiers
                  .filter((s) => s.type === 'ImportSpecifier')
                  .map((specifier) => specifier.imported.name)
              )
            }
            if (node.type === "VariableDeclarator" && parent.type === 'VariableDeclaration' && node.init) {
              // if (node.init.callee?.name === "writable") {

              if (parent.leadingComments?.length) {
                const find = parent?.leadingComments.filter((comment) => {
                  return comment.value.includes('#registerStore')
                })
                if (find) {
                  // console.log('STORE NAME: ', node.id.name);
                  // console.log('NODE: ', node);
                  // console.log('PARENT: ', parent)
                  // console.log('INIT: ', node.init)
                  // Lets make sure we add the import

                  addImport(addImportMap, '@polarforge/unlog', ["registerStore"])

                  // Register the store
                  markup.appendRight(node.end + 1, '\n' + `registerStore("${node.id?.name}", ${node.id?.name}, "${filename}")`)
                }
              }

              // }
            }
            if (node.type === 'VariableDeclaration' && parent.type === "ExportNamedDeclaration") {
              const output = {
                name: '',
                default: undefined,
                type: '',
                typeDescription: '',
              };
              // console.log('node: ', node);
              // console.log('declarations', node.declarations)
              if (node.declarations?.length) {
                output.name = node.declarations[0].id?.name

                if (node.declarations?.init) {
                  output.default = node.declarations[0].value
                }
              }

              // console.log('Leading comments: ', parent.leadingComments)
              if (parent?.leadingComments?.length > 0) {
                parent.leadingComments.forEach((item) => {
                  if (item.type === 'Block') {
                    const ast = doctrine.parse(item.value, { unwrap: true })
                    if (ast.tags?.length) {
                      ast.tags.forEach((tag) => {
                        // console.log('Tag: ', tag)
                        // console.log('Type title:', tag.title)
                        // console.log('Type: ', tag.type)
                        output.type = tag.type?.name;
                        output.typeDescription = tag.description
                      })
                    }
                  }
                });
              }

              // Output
              componentProps.props = [...componentProps.props, output]
            }
          },
          leave(node, parent, prop, index) {
            // console.log({ node, parent, prop, index })
          }
        })
        // fs.writeFile(`${componentProps.filepath} / ${componentProps.component}.props.json`, JSON.stringify(componentProps), (err) => {
        //   if (err) {
        //     console.error('error creating file', err)
        //   }
        // })

        // console.log('WHAT IMPORTS:', documentImportMap, addImportMap)

        // Filter out existing dependencies
        Object.entries(documentImportMap).forEach(([from, { imports }]) => {
          if (addImportMap[from]) {
            addImportMap[from].imports = addImportMap[from].imports.filter((i) => !imports.includes(i))
          }
        })

        // need to add the import
        if (Object.keys(addImportMap).length > 0) {
          const imports = parseImportMap(addImportMap)
          if (scriptContentNode) {

            markup.appendLeft(scriptContentNode.start, '\n' + imports + '\n')
          } else {
            markup.prepend('<script>\n' + imports + '\n</script>\n')
          }
        }

        if (filename.includes('Component.svelte')) {

          // console.log('RESULT: ', markup.toString())
        }
      }

      return {
        // code: content
        code: markup.toString()
      }
    },
    script: (data) => {
      // console.log({ data })
    }
  }
}