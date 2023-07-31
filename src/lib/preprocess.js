import { preprocess, parse, walk } from 'svelte/compiler'

export function kPreprocess() {
  return {
    markup: ({ content, filename }) => {
      console.log({ filename })
      return {
        code: content
      }
    },
    script: (data) => {
      console.log('this should run after the markup')
      console.log({ data })
    }
  }
}