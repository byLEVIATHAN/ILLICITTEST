const discord = require("discord.js");
const fileLevels = require("../data/level.json");

module.exports.run = async(bot, message, args) => {

   
    // Verkrijg id van de gebruiker.
    var idUser = message.author.id;

    // Als gebruiker nog niet voorkomt de standaard waarden zetten.
    if (!fileLevels[idUser]) {

        fileLevels[idUser] = {

            xp: 0,
            level: 0

        };

    }

    // Verkrijg level van de user.
    var levelUser = fileLevels[idUser].level;
    // Verkijg xp van de user.
    var xpUser = fileLevels[idUser].xp;
    // Bereken volgend xp level.
    var nextLevelXp = levelUser * 300;
    // Bereken wanneer aantal xp bereikt is voor volgend level.
    var whenNextLevel = nextLevelXp - xpUser;

    // Maak embed en zend.
    var embedLevel = new discord.RichEmbed()
        .setTitle(message.author.username)
        .setColor("RANDOM")
        .addField("Level", levelUser, true)
        .addField("xp", xpUser, true)
        .setFooter(`${whenNextLevel} XP until next level`, message.author.displayAvatarURL);

    message.channel.send(embedLevel);


}

module.exports.help = {

    name: "level"

}