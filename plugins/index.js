// Generated by CoffeeScript 2.5.0
(function() {
  module.exports = function(plugins) {
    var i, id, len, results;
    results = [];
    for (i = 0, len = plugins.length; i < len; i++) {
      id = plugins[i];
      if ((typeof id) === 'string') {
        id = {
          use: id
        };
      }
      id.use = '~/plugins/js/' + id.use;
      results.push(id);
    }
    return results;
  };

}).call(this);
