/* eslint-disable @typescript-eslint/no-var-requires */
const { dependencies } = require('./package.json');

module.exports = {
  name: 'MobilePhoneProducts',
  filename: 'remoteEntry.js',
  remotes: {},
  exposes: {
    './ProductList': './src/components/ProductList',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
