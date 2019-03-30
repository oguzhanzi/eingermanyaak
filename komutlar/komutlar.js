const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('deneme');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'komutlar.',
  usage: 'komutlar'
};
