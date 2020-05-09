/*import hljs from 'highlight.js/lib/core';
//import 'highlight.js/styles/github.css';

import javascript from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('python', python);*/

export function initHljs() {
  if (!window.hljs) {
    return;
  }

  document.querySelectorAll('pre code').forEach((block) => {
    window.hljs.highlightBlock(block);
  });
}