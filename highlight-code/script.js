import hljs from 'highlight.js'

document.querySelectorAll('pre code').forEach((el) => hljs.highlightElement(el as HTMLElement))