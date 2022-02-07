const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    description: "Sean's Music Bot",
    async execute(message, args, cmd, client, Discord){
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Sorry mate, you must be in the channel to use the bot!')

        const server_queue = queue.get(message.guild.id);

        if (cmd === 'play'){
            if (!args.length) return message.channel.send('Enter a song after !play')
            let song = {};
        }
    }
}