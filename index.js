const Discord = require('discord.js');
const token = 'NTQyODQxMjUxODE3MzI0NTU0.Dz9KLg.GBe1SneajUut_78ltxAPZfxsgTk';

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is now connected');
    
    client.channels.find(x => x.name === 'bot-shit').send('***Connected!***')
});

client.on('guildMemberAdd', member => {
    let channel = client.channels.find(x => x.name === 'bot-shit')
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name: ', `${member}`)
        .addField('Welcome!', `Welcome to the server, ${member}`)
        .addField('You are number:', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + ` ${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
    let channel = client.channels.find(x => x.name === 'bot-shit')
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name: ', `${member} has left the server.`)
        .addField('The server now has:', ` ${member.guild.memberCount}` + " members")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + ` ${member.guild.name};` + " Sending leave message now")
    console.log("Leave Message Sent")
});

client.login(token);