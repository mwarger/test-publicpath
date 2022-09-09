const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.

const pkg = require('../../package.json');

const isDev = pkg.version.endsWith('-SNAPSHOT');
const prefixCdn = isDev ? 'cdn-dev' : 'cdn';
const path = `https://${prefixCdn}.my-website.com`;
const publicPath = `${path}/my-test-app/${pkg.version}/`;

// https://github.com/nrwl/nx/issues/3175
module.exports = (config, context) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,

  const updatedConfig = {
    ...config,
    output: {
      ...config.output,
      publicPath,
    },
  };

  console.log('config', updatedConfig.output);

  return updatedConfig;
};
