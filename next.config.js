const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "david",
        mongodb_password: "J4UESw2EEVbL7ZXP",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "david",
      mongodb_password: "J4UESw2EEVbL7ZXP",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site-prod",
    },
  };
};
