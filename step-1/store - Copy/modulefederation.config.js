/* eslint-disable @typescript-eslint/no-var-requires */
const { dependencies } = require('./package.json');

module.exports = {
  name: 'search',
  filename: 'remoteEntry.js',
  remotes: {},
  exposes: {},
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
