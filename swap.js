// swap.js templating library

;(function() {
  function swap(str, obj) {
    // convert to string, empty if false
    str = (str || '') + ''

    obj = obj || {}

    // replace comments (like {!foo!})
    str = str.replace(/(\\?)\{![\s\S]*?!\}/g, function(s, escapeChar) {
      if (escapeChar) return s.substr(1)
      return ''
    })
    
    // replace fields
    str = str.replace(/(\\?)\{([\w_]+)\}/g, function(s, escapeChar, key) {
      if (escapeChar) return s.substr(1)
      return obj[key] || ''
    })

    return str
  }

  if (typeof module == 'object') {
    module.exports = swap
  } else {
    window.swap = swap
  }
}());
