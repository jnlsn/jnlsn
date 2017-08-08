const path = require('path');
const { argv } = require('yargs');

const isProduction = !!((argv.env && argv.env.production) || argv.p);

module.exports = {
  paths: {
    entry: path.resolve( __dirname, './src/_assets' ),
    output: path.resolve( __dirname, './src/assets' ),
  },
  enabled: {
    sourceMaps: !isProduction,
    optimize: isProduction,
    watcher: !!argv.watch,
  },
  env: Object.assign({ production: isProduction, development: !isProduction }, argv.env),
}

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = isProduction ? 'production' : 'development';
}
