const Discord = require('discord.js')

module.exports = {
  name: 'help',

  execute(message) {
    const description =
      'command!\n' +
      '> By putting the word bedrock or just the letter b after an ip the bot will ping this ip using the bedrock protocol.\n\n' +
      '**Admin commands:**\n' +
      '`mc!setip [ip] [bedrock]` - set an ip that the bot will monitor\n' +
      '`mc!log [on/off]` - turn logging on or off\n' +
      '`mc!setup [ip] [bedrock]` - set up the channels that will display the status of a selected server\n' +
      '`mc!rmchann` - remove the monitoring channels\n' +
      '\n**User commands:**\n' +
      '`mc!ip` - return the default ip of the server\n' +
      '`mc!ping [ip] [bedrock]` - ping a minecraft server\n' +
      '`mc!news` - see the latest articles from minecraft.net\n' +
      '`mc!chart [uptime/playersonline/mostactive]` - make a chart with the logged info\n' +
      '`mc!bug [bug]` - Report a bug in the bot\n' 
 

    const embed = new Discord.MessageEmbed()
      .setColor('#008000')
      .setTitle('About the bot')
      .setDescription(description)
      .setFooter({ text: 'be nice ;)' })
    message.channel.send({ embeds: [embed] })
  }
}
