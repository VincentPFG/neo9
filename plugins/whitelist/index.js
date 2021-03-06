// Generated by CoffeeScript 2.5.1
(function() {
  module.exports = function({chainWebpack}, options) {
    return chainWebpack(function(server, {isServer}) {
      if (isServer) {
        return server.externals([
          (require('webpack-node-externals'))({
            whitelist: options
          })
        ]);
      }
    });
  };

}).call(this);
