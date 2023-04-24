/* eslint-disable @typescript-eslint/no-var-requires */
const { dependencies } = require('./package.json');

module.exports = {
  name: 'Store',
  filename: 'remoteEntry.js',
  remotes: {
    MobilePhoneProducts: 'http://localhost:3001/remoteEntry.js',
  },
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
    axios: {
      singleton: true,
      requiredVersion: dependencies['axios'],
    },
  },
};
