const Functions = require('./functions.js');

module.exports = (app) => {

  app.route('/api/message/broadcast')
      .post(Functions.broadcastMessage);

};