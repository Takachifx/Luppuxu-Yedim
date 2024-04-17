const { Event } = require("../../../../Global/Structures/Default.Events");
const {Guild} = require("../../../../Global/Config/Guild")
const { Collection, EmbedBuilder, PermissionsBitField } = require('discord.js');
const GuardData = require("../../../../Global/Database/Guard")
const request = require('request');

class roleCreate extends Event {
    constructor(client) {
        super(client, {
            name: "roleCreate",
            enabled: true,
        });    
    }    

 async  onLoad(role) {
    if(role.guild.id != Guild.ID) return;
    const guild = client.guilds.cache.get(Guild.ID)
    const Guard = await GuardData.findOne({guildID: guild.id})
    const rolesGuardonly = Guard ? Guard.rolesGuard : false;
    if(rolesGuardonly == true){
    let entry = await guild.fetchAuditLogs({type: 30}).then(audit => audit.entries.first());
    if(entry.executor.id == guild.ownerId) return;
    const orusbuevladı = await guild.members.cache.get(entry.executor.id);
    var güvenliSalaklar = Guard ? Guard.roleSafedMembers : ["852800814808694814"]
    const log = guild.channels.cache.find(x => x.name == "role-guard")
    const embed = new EmbedBuilder({
        title:"Server Roles Protection - Security I",
        footer:{text:`Server Security`, iconURL: client.user.avatarURL()}
    })
    if(!entry || !entry.executor || Date.now() - entry.createdTimestamp > 5000|| orusbuevladı.user.bot)return;
    if (await guvenli(orusbuevladı,"role") == true){
        if(log) return log.send({embeds:[embed.setAuthor({name:`Trustworthy ✅`, iconURL:guild.iconURL()}).setDescription(`${orusbuevladı}, \`${new Date(Date.now()).toTurkishFormatDate()}\` tarihinde **${role.name}** isimli rolü oluşturdu.`)]})
    }
    await ytkapa(Guild.ID)
    await ytçek(orusbuevladı)
    await role.delete()
    if(log) return log.send({embeds:[embed.setAuthor({name:`Not safe ❎`, iconURL:guild.iconURL()}).setDescription(`${orusbuevladı}, \`${new Date(Date.now()).toTurkishFormatDate()}\` tarihinde **${role.name}** isimli rolü oluşturdu için rolleri alındı ve rol sunucudan silindi.`)]})
    }
 }
}

module.exports = roleCreate;