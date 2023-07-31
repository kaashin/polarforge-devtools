import { preprocess, parse, walk } from 'svelte/compiler'
import doctrine from 'doctrine';
import fs from 'fs';
import path from 'path';



export function kPreprocess() {
  return {
    markup: ({ content, filename }) => {

      const ast = parse(content)
      // const result = parse(content, { filename: filename });
      // console.log({ result })

      // if (filename.endsWith('.svelte')) {
      if (filename.includes('Component.svelte')) {
        console.log({ filename })
        const componentProps = {
          filename,
          filepath: path.dirname(filename),
          component: path.basename(filename, path.extname(filename)),
          props: []
        };
        walk(ast, {
          enter(node, parent, prop, index) {
            if (node.type === 'VariableDeclaration' && parent.type === "ExportNamedDeclaration") {
              const output = {
                name: '',
                default: undefined,
                type: '',
                typeDescription: '',
              };
              console.log('node: ', node);
              console.log('declarations', node.declarations)
              if (node.declarations?.length) {
                output.name = node.declarations[0].id?.name

                if (node.declarations?.init) {
                  output.default = node.declarations[0].value
                }
              }

              console.log('Leading comments: ', parent.leadingComments)
              if (parent?.leadingComments?.length > 0) {
                parent.leadingComments.forEach((item) => {
                  if (item.type === 'Block') {
                    const ast = doctrine.parse(item.value, { unwrap: true })
                    if (ast.tags?.length) {
                      ast.tags.forEach((tag) => {
                        console.log('Tag: ', tag)
                        console.log('Type title:', tag.title)
                        console.log('Type: ', tag.type)
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
        fs.writeFile(`${componentProps.filepath}/${componentProps.component}.props.json`, JSON.stringify(componentProps), (err) => {
          if (err) {
            console.error('error creating file', err)
          }
        })
      }

      return {
        code: content
      }
    },
    script: (data) => {
      // console.log({ data })
    }
  }
}