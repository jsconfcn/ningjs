var I18nPlugin = require("i18n-webpack-plugin")
var languages = {
    "en": null,
    "ch": require("./ch.json")
}

module.exports = Object.keys(languages).map(function(language) {
  return {
    name: language,
    entry: [ './src/app.js' ],
    output: {
      path: __dirname + '/build',
      filename: language + 'Bundle.js'
    },
    resolve: {
      modulesDirectories: [
        'src',
        'node_modules',
      ],
      extensions: ['', '.json', '.js'],
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }, {
          test: /\.scss$/,
          loader: 'style!css!autoprefixer?browsers=last 2 version!sass'
        }, {
          test: /\.css$/,
          loader: 'style!css!autoprefixer?browsers=last 2 version'
        }, {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
          test: /\.json$/,
          loader: 'json'
        },
      ]
    },
    plugins: [
      new I18nPlugin(
        languages[language]
      )
    ]
  }
})
