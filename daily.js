const Discord = require("discord.js")

module.exports = {
name: "embed",
aliases: [""],

  const 
run: async(client, message, args) => {
let embed = new Discord.MessageEmbed()
.setAuthor({ name: "Embed", iconURL: message.guild.iconURL({ dynamic: true }) })
.setColor("RANDOM")
.setDescription(`Descrição da embed aqui :)`)
.setFooter({ text: `Rodapé da embed`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }) 
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }) });

message.reply({ embeds: [embed] })
}
}  
