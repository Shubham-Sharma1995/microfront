const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remoteApp",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./RemoteApp": "./src/pages/index.tsx", // Expose only your custom modules
        },
        shared: {
          react: {
            singleton: true, // Ensure that React is shared as a singleton
            requiredVersion: false, // Use the version installed in the host app
          },
          "react-dom": {
            singleton: true, // Ensure that ReactDOM is shared as a singleton
            requiredVersion: false, // Use the version installed in the host app
          },
          // Optionally share other libraries
        },
      })
    );

    return config;
  },
};
