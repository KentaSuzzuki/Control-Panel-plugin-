const Router = require("express").Router();

const setting = require("./controllers/setting.js");
const tab = require("./controllers/tab.js")

Router.get('/settings', setting.getSettings);
Router.post('/settings', setting.saveSettings);
Router.post('/settings/reset', setting.resetSettings);

Router.post('/tab', tab.update);

module.exports = Router;