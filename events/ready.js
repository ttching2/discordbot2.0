const { Events } = require('discord.js');
// const { token } = require('../config.json')

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },

    // client.login(token)
};