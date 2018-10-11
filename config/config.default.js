'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524538884191_6006';

  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '12345678',
      // database
      database: 'demo',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return config;
};
