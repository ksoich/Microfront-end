/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const federationConfig = require('../../modulefederation.config.js');
const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  /**
   * @description
   * In local development and development server, create and download types
   */
  if (process.env.REACT_APP_ENVIRONMENT === 'dev' || process.env.REACT_APP_ENVIRONMENT === 'local') {
    config.infrastructureLogging = {
      level: 'log',
    };

    /**
     * If the web application is a microfront end utilize the following configuration
     */
    // config.plugins.push(
    //   new FederatedTypesPlugin({
    //     federationConfig,
    //     typescriptFolderName: '../public/@mf-types',
    //   }),
    // );

    /**
     * If the web application consumes a microfront end utilize the following configuration
     */
    // config.plugins.push(
    //   new FederatedTypesPlugin({
    //     federationConfig,
    //   }),
    // );
  }

  config.plugins.push(new ModuleFederationPlugin(federationConfig));
  config.output.publicPath = 'auto';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
