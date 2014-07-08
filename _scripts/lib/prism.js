var oldPrism = window.Prism;

// requires and configures Prism
var Prism = require('../../_vendor/prism/prism');

// alias HTML/markup
Prism.languages.html = Prism.languages.markup;

// add a before-highlight hook to normalize leading whitespace
// remove trailing whitespace (newlines and whitespace before </code>)
// and outdent the code we want to render so the code doesn't look so
// heredoc-like
Prism.hooks.add('before-highlight', function(env) {
  env.code = env.code.replace(/^[\r\n]+/, '').replace(/[\s]+$/, '');
  var whitespace = env.code.match(/^[\s]+/);
  var regex;
  if (whitespace && whitespace[0]) {
    regex = new RegExp('^' + whitespace[0], 'gm');
    env.code = env.code.replace(regex, '');
  }
});

// remove window Prism if it exists
window.Prism = oldPrism;

// export Prism
module.exports = Prism;
