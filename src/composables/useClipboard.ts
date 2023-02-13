import Clipboard from 'clipboard'

// https://www.npmjs.com/package/clipboard

interface Options {
  appendToBody: boolean // Fixes IE by appending element to body
}

export default (opts?: Options) => {
  // default appendToBody true
  const appendToBody = opts?.appendToBody === undefined ? true : opts.appendToBody
  return {
    toClipboard(text: string, container?: HTMLElement) {
      return new Promise((resolve, reject) => {
        const el = document.createElement('button') // create dummy HTML element
        const clipboard = new Clipboard(el, {
          text: () => text,
          action: () => 'copy',
          container: container !== undefined ? container : document.body
        })
        clipboard.on('success', (e) => {
          clipboard.destroy()
          resolve(e)
        })
        clipboard.on('error', (e) => {
          clipboard.destroy()
          reject(e)
        })
        if (appendToBody)
          document.body.appendChild(el) // appendToBody fixes IE
          el.click() // simulate click
        if (appendToBody)
          document.body.removeChild(el) // remove dummy element from body if appended
      })
    }
  }
}