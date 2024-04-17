
const { PermissionsBitField } = require('discord.js');
const { Command } = require("../../../../Global/Structures/Default.Commands");

class Help extends Command {
    constructor(client) {
        super(client, {
            name: "devHelp",
            description: "Bot'a eklenmiş olan komutları gösterir",
            usage: ".yardım",
            category: "wexcik",
            aliases: ["devhelp","devyardım"],
            enabled: true,

            cooldown: 3500,
            guildOwner:true,
            developer : true
        });
        // constructor(wexcik){
        //     super(wexcik,{
        //         name:"Enes",
        //         pseudonym:"Eno",
        //         nickname:"wexcik",
        //         dcNickname:"wexcikxrdd",
        //         instagram:"wexcikxrdd",
        //         bahance:"wexcikcyber",
        //         skills:["Programmer","Social Media Manager"],
        //         languages:["Türkçe","İngilizce","Almanca"],
        //         softwareLanguages:["C#","JS","HTML/CSS","Dart","Python"]
        //     })
        // }
    }
    
    onRequest (client, message, args,embed) {
       message.reply({embeds:[embed.setDescription(`${client.commands.filter(x=> (x.developer == true || x.guildOwner == true) && (x.category == "Approval" || x.category == "Guard")).map(x=> `\`${x.usage}\``).join("\n")}`)]})
    }
}

module.exports = Help
