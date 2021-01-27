const config = require('./firebase_config')
const firebase = require('firebase')

firebase.initializeApp(config);

module.exports = firebase;