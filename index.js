module.exports = function () {
  return {
    postcssPlugin: 'postcss-host',
    Rule(rule) {
      rule.selector = rule.selectors
        .map(function (selector) {
          if (isHostSelector(selector)) {
            return getChangedHostSelector(selector);
          }
          return selector;
        })
        .join(', ');
    },
  };
};

module.exports.postcss = true;

/**
 * Check if specified selector is a :host
 * @param  {String} selector
 * @return {Boolean}
 */
function isHostSelector(selector) {
  return /\:host[^(]/.test(selector);
}

/**
 * Returns :host(:pseudo-selector) from a wrong :host:pseudo-selector
 * @param  {String} selector
 * @return {String}
 */
function getChangedHostSelector(selector) {
  return selector.replace(/:host([^\s]+)/, ':host($1)')
}
