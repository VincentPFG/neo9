// Generated by CoffeeScript 2.4.1
(function() {
  module.exports = function({configureWebpack}) {
    return configureWebpack(function(config) {
      var i, j, len, ref, rule;
      ref = config.module.rules;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        rule = ref[i];
        if (String(rule.test) === String(/\.sass$/)) {
          config.module.rules[i] = {
            test: /\.sass$/,
            use: [
              'isomorphic-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          };
        }
      }
      return config;
    });
  };

}).call(this);