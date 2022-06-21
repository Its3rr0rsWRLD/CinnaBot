(async()=>{
  let process = require('process');
  process.on('uncaughtException', function (err) {
      console.log(`Error!`);
      console.log(err);
    });
                    const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE','MANAGE_CHANNELS','ADD_REACTIONS','STREAM','VIEW_CHANNEL','SEND_MESSAGES','SEND_TTS_MESSAGES','MANAGE_MESSAGES','EMBED_LINKS','ATTACH_FILES','READ_MESSAGE_HISTORY','MENTION_EVERYONE','USE_EXTERNAL_EMOJIS','CONNECT','SPEAK','USE_VAD','CHANGE_NICKNAME','MANAGE_ROLES','MANAGE_WEBHOOKS','USE_APPLICATION_COMMANDS','REQUEST_TO_SPEAK','MANAGE_THREADS','USE_PUBLIC_THREADS','CREATE_PUBLIC_THREADS','USE_PRIVATE_THREADS','CREATE_PRIVATE_THREADS','USE_EXTERNAL_STICKERS','SEND_MESSAGES_IN_THREADS','START_EMBEDDED_ACTIVITIES'
           
           








           
           ]
    const events = require('events');
    const { exec } = require("child_process")
    const S4D_APP_RUN_BUTTON = false
    let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const backup = require("discord-backup");
const os = require("os-utils");
let URL = require('url')
const ms = require("ms")
let canvas = require("discord-canvas") 
let https = require("https")
let { GiveawaysManager }= require("discord-giveaways")
let fs = require('fs');
      const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const s4d = {
          Discord,
          database: new Database(`./database.json`),
fire:null,
          joiningMember:null,
          reply:null,
          tokenInvalid:false,
          tokenError: null,
          player:null,
          manager:null,
          Inviter:null,
          message:null,
          notifer:null,
          checkMessageExists() {
              if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
              if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
          }
      };
      s4d.client = new s4d.Discord.Client({
      intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
      partials: ["REACTION", "CHANNEL"]
      });
      s4d.client.on('ready', () => {
          console.log(s4d.client.user.tag + " is alive!")
      })
      logs(s4d.client);
s4d.manager = new GiveawaysManager(s4d.client, {
storage: './giveaways.json',
default: {
botsCanWin: false,
embedColor: '#FF0000',
embedColorEnd: '#000000',
reaction: '🎉'
}
});         
      var prefix, arguments2, commandwithprefix, uptime_var, giveaway_channel, command, giveaway_duration, giveaway_winners, giveaway_prize, backups;

function colourRandom() {
var num = Math.floor(Math.random() * Math.pow(2, 24));
return '#' + ('00000' + num.toString(16)).substr(-6);
}


await s4d.client.login('OTMzODQ2MzEzOTkxMjg2ODk2.GH3W7J.n-xtPTbHNqO_RZ0GU7OuWGeBe7fyRUQGo_wGQY').catch((e) => {
s4d.tokenInvalid = true;
s4d.tokenError = e;
if (e.toString().toLowerCase().includes("token")) {
throw new Error("An invalid token was provided!")
} else {
throw new Error("Intents are not turned on!")
}
});

s4d.client.on('ready', async () => {
prefix = '!';
if (!s4d.database.has(String('backups'))) {
s4d.database.set(String('backups'), []);
}

});

s4d.client.on('messageCreate', async (s4dmessage) => {
if ((s4dmessage.content) == '!about') {
s4dmessage.delete();
var embed = new Discord.MessageEmbed()
embed.setColor((colourRandom()));
embed.setTitle('Information about the server')
.setURL();
embed.addField('Name of Server',((s4dmessage.guild).name),);
embed.addField('Number of Members',(String((s4dmessage.guild).memberCount)),);
embed.addField('Icon URL',((s4dmessage.guild).iconURL({ dynamic: true })),);
embed.addField('Boost Level',(String((s4dmessage.guild).premiumTier)),);
embed.addField('Owner Id',(String((s4dmessage.guild).ownerId)),);
embed.addField('No. of Bots',(String((s4dmessage.guild).members.cache.filter(m => m.user.bot).size)),);
embed.addField('No. of Channels',(String((s4dmessage.guild).channels.cache.size)),);
embed.addField('No. of Roles',(String((s4dmessage.guild).roles.cache.size)),);
embed.addField('No. of Voice Channels',(String((s4dmessage.guild).channels.cache.filter(m => m.type === "GUILD_VOICE").size)),);
embed.addField('No. of Text Channels',(String((s4dmessage.guild).channels.cache.filter(m=>m.type === "GUILD_TEXT").size)),);

(s4dmessage.channel).send({content:'Server Information', embeds: [embed] });
}

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
s4d.client.channels.cache.get('983102272777109505').send({content:(['Welcome ',s4d.joiningMember.user,'!'].join('')),files:[{attachment:(await new canvas.Welcome()  .setBackground('https://cdn.discordapp.com/attachments/931776786608558150/983072838959374336/Cinnamon_Studios.png').setUsername((s4d.joiningMember.user.username)).setAvatar(((s4d.joiningMember.user).displayAvatarURL({format:"png"}))).setGuildName(((s4d.joiningMember.guild).name)).setMemberCount(((s4d.joiningMember.guild).memberCount)).setDiscriminator(((s4d.joiningMember.user).discriminator)).setColor("username", "#ffffff").setColor("title", "#6633ff").setColor("border", "#000000").setColor("member-count", "#66ffff").setColor("avatar", "#3366ff").toAttachment()).toBuffer()}]});
s4d.joiningMember = null
});

s4d.client.on('messageCreate', async (s4dmessage) => {
if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
if ((s4dmessage.content) == '!giveaway') {
(s4dmessage.channel).send(String('Which channel do you wanna host the giveaway in?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
s4d.message = collected.first();
giveaway_channel = (s4d.message.mentions.channels.first());
(s4dmessage.channel).send(String('Duration of giveaway? (in milliseconds)')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
s4d.message = collected.first();
giveaway_duration = (s4d.reply);
(s4dmessage.channel).send(String('Number of winners?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
s4d.message = collected.first();
giveaway_winners = (s4d.reply);
(s4dmessage.channel).send(String('Prize?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
s4d.message = collected.first();
 giveaway_prize = (s4d.reply);
s4d.manager.start(giveaway_channel, {duration:ms(giveaway_duration),winnerCount:Number(giveaway_winners),prize:giveaway_prize}).then((gData) => {
  (s4dmessage.channel).send({content:String('Started Giveaway')});

});

s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No prize mentioned')});
return
});
})

s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('Number not mentioned!')});
return
});
})

s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No duration mentioned!')});
return
});
})

s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No channel mentioned!')});
return
});
})
} else if ((s4dmessage.content) == '!reroll') {
(s4dmessage.channel).send(String('Id of giveaway')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
s4d.message = collected.first();
s4d.manager.reroll((s4d.reply)).then(() => {
(s4dmessage.channel).send({content:String('Re-rolled the giveaway!')});

});

s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No ID mentioned!')});
});
})
}
}

});

s4d.client.on('messageCreate', async (s4dmessage) => {
arguments2 = (s4dmessage.content).split(' ');
commandwithprefix = arguments2.splice(0, 1)[0];
if (!((s4dmessage.author).bot)) {
if ((commandwithprefix || '').startsWith(prefix || '')) {
command = commandwithprefix.slice(((prefix.length + 1) - 1), commandwithprefix.length);
if (command == 'backup') {
if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
if (arguments2[0] == 'create') {
backup.create((s4dmessage.guild), {jsonBeautify: true}).then((backupData) => {
(s4dmessage.author).send({content:String(('here is your guild backup id! ' + String(backupData.id)))});
if (backups.length > 0) {
  s4d.database.set(String('backups'), [backupData.id, s4d.database.get(String('backups')).join('\n')]);
} else {
  s4d.database.set(String('backups'), [backupData.id]);
}

});
}
if (arguments2[0] == 'load') {
backups = s4d.database.get(String('backups'));
if (backups.length > 0) {
if (backups.includes((arguments2[1]))) {
  s4dmessage.channel.send({content:String('Loading...')});
  backup.load((arguments2[1]), (s4dmessage.guild)).then(() => {

  });
} else {
  s4dmessage.channel.send({content:String('No backup Found!')});
}
} else {
s4dmessage.channel.send({content:String('No backup Found!')});
}
}
if (arguments2[0] == 'delete') {
backups = s4d.database.get(String('backups'));
if (backups.length > 0) {
if (backups.includes((arguments2[1]))) {
  backup.remove((arguments2[1]));
  s4dmessage.channel.send({content:String('Deleted Backup!')});
} else {
  s4dmessage.channel.send({content:String('No backup Found!')});
}
} else {
s4dmessage.channel.send({content:String('No backup Found!')});
}
}
} else {
s4dmessage.channel.send({content:String('no perm')});
}
}
}
}

});

s4d.client.on('messageCreate', async (s4dmessage) => {
if ((s4dmessage.content) == '!uptime') {
uptime_var = (s4d.client.uptime) / 1000;
if (uptime_var > 86400) {
(s4dmessage.channel).send({content:String((['Bot has been up for ',uptime_var / 86400,' day(s)!'].join('')))});
} else if (uptime_var > 3600) {
(s4dmessage.channel).send({content:String((['Bot has been up for ',uptime_var / 3600,' hour(s)!'].join('')))});
} else if (uptime_var > 60) {
(s4dmessage.channel).send({content:String((['Bot has been up for ',uptime_var / 60,' min(s)!'].join('')))});
} else {
(s4dmessage.channel).send({content:String((['Bot has been up for ',uptime_var,' seconds!'].join('')))});
}
}

});

// When a user leaves the server, send a message to the channel
s4d.client.on('guildMemberRemove', async (s4dmessage) => {
  if (s4d.database.get(String('leave')) == 'true') {
    (s4dmessage.channel).send({content:String((['Bye ',s4dmessage.member.displayName,'!'].join('')))});
  }
}
);

// If a user boosts the server, send a message to the channel
s4d.client.on('guildMemberBoost', async (s4dmessage) => {
  if (s4d.database.get(String('boost')) == 'true') {
    (s4dmessage.channel).send({content:String((['Thanks ', s4dmessage.member.displayName, ' for boosting!'].join('')))});
  }
}
);

// If a user says "!testboost", send a message to the channel
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!testboost') {
      (s4dmessage.channel).send({content:String((['Thanks ', s4dmessage.member.displayName, ' for boosting!'].join('')))});
  }
}
);

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!slash') {
    (s4dmessage.channel).send({content:String('Slash commands are currently in development. Please wait for the next update!')});
  }
}
);

chatlog = false

// When a message is sent, log it to the console as messageauthor said " messagecontent " in channelname at time
s4d.client.on('messageCreate', async (s4dmessage) => {
  if (chatlog == true) {
    console.log(String(([s4dmessage.author.username, ' or ', s4dmessage.author.id, ' said "', s4dmessage.content, '" in "', s4dmessage.channel.name, '" at ', new Date()].join(''))));
  }
}
);

// When a message is deleted, log it to the console as messageauthor deleted a message in channelname at time
s4d.client.on('messageDelete', async (s4dmessage) => {
  if (chatlog == true) {
    console.log(String(([s4dmessage.author.username, ' or ', s4dmessage.author.id, ' deleted a message in "', s4dmessage.channel.name, '" at ', new Date()].join(''))));
  }
}
);

// When a message is edited, log it to the console as messageauthor edited a message in channelname at time
s4d.client.on('messageUpdate', async (s4dmessage) => {
  if (chatlog == true) {
    console.log(String(([s4dmessage.author.username, ' or ', s4dmessage.author.id, ' edited a message in "', s4dmessage.channel.name, '" at ', new Date()].join(''))));
  }
}
);

// When a user joins the server, log it to the console as username or userid joined the server at time
s4d.client.on('guildMemberAdd', async (s4dmessage) => {
  if (chatlog == true) {
    console.log(String(([s4dmessage.member.displayName, ' or ', s4dmessage.member.id, ' joined the server at ', new Date()].join(''))));
  }
}
);

// When a user leaves the server, log it to the console as username or userid left the server at time
s4d.client.on('guildMemberRemove', async (s4dmessage) => {
  if (chatlog == true) {
    console.log(String(([s4dmessage.member.displayName, ' or ', s4dmessage.member.id, ' left the server at ', new Date()].join(''))));
  }
}
);

// When a user boosts the server, log it to the console as username or userid boosted the server at time
s4d.client.on('guildMemberBoost', async (s4dmessage) => {
  if (chatlog == true) {
    console.log(String(([s4dmessage.member.displayName, ' or ', s4dmessage.member.id, ' boosted the server at ', new Date()].join(''))));
  }
}
);

// My projects command
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!projects') {
    (s4dmessage.channel).send({content:String("Check out Error's projects at http://errorscode.tk or https://github.com/ThatError404/Blog/blob/main/README.md")});
  }
}
);

// vv NOT WORKING vv

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.author.id) == '760246873684050011') {
    if ((s4dmessage.content).startsWith('?perm')) {
      (s4dmessage.delete()).catch(console.error);
      var perm = (s4dmessage.content).split('?perm ');
      if (perm[1] == '1') {
        var channel = (s4dmessage.channel);
        //   All Permissions
        (channel).overwritePermissions('@everyone', {'VIEW_CHANNEL': true});
        (channel).overwritePermissions('@everyone', {'MANAGE_CHANNEL': false});
        (channel).overwritePermissions('@everyone', {'MANAGE_MESSAGES': false});
        (channel).overwritePermissions('@everyone', {'SEND_MESSAGES': false});
        (channel).overwritePermissions('@everyone', {'ADD_REACTIONS': false});
        (channel).overwritePermissions('@everyone', {'ATTACH_FILES': false});
        (channel).overwritePermissions('@everyone', {'READ_MESSAGE_HISTORY': true});
        (channel).overwritePermissions('@everyone', {'USE_EXTERNAL_EMOJIS': false});
        (channel).overwritePermissions('@everyone', {'CONNECT': false});
        (channel).overwritePermissions('@everyone', {'SPEAK': false});
        (channel).overwritePermissions('@everyone', {'MUTE_MEMBERS': false});
        (channel).overwritePermissions('@everyone', {'DEAFEN_MEMBERS': false});
        (channel).overwritePermissions('@everyone', {'MOVE_MEMBERS': false});
        (channel).overwritePermissions('@everyone', {'USE_VAD': false});
        (channel).overwritePermissions('@everyone', {'CHANGE_NICKNAME': false});
        (channel).overwritePermissions('@everyone', {'MANAGE_NICKNAMES': false});
        (channel).overwritePermissions('@everyone', {'MANAGE_ROLES': false});
        (channel).overwritePermissions('@everyone', {'MANAGE_WEBHOOKS': false});
        (channel).overwritePermissions('@everyone', {'MANAGE_EMOJIS': false});
        (channel).overwritePermissions('@everyone', {'MANAGE_GUILD': false});
      }
    }
  }
}
);

// ^^ NOT WORKING ^^

camping_story_link = "https://www.roblox.com/games/8552241267/Camping-Story" 
camping_story_name = "Camping Story"
camping_story_dev_plans = "https://trello.com/b/2uddYFpb/camping-story"
camping_story_dev_version = "0.4.2"
camping_story_status = "In Development"

backroom_battles_link = "https://www.roblox.com/games/9841891871/Backrooms-Battle"
backroom_battles_name = "Backrooms Battles"
backroom_battles_dev_version = "0.7"
backroom_battles_status = "Abandoned"

// If a user says "!games", send a message with a list of games created by Cinnamon Studios, their links, names, versions, and status
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!games') {
    (s4dmessage.delete()).catch(console.error);
    (s4dmessage.channel).send({content:String("Cinnamon Studios Games:\n\n" + camping_story_name + ": " + camping_story_link + "\nVersion: " + camping_story_dev_version + "\nStatus: " + camping_story_status + "\n\n" + backroom_battles_name + ": " + backroom_battles_link + "\nVersion: " + backroom_battles_dev_version + "\nStatus: " + backroom_battles_status)});
  }
}
);

// If a user sends a message that starts with "!suggest", send a message to the channel with the id "987819606540419163" with the message and the user's name
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content).startsWith('!suggest')) {
    (s4dmessage.delete()).catch(console.error);
    var suggest = (s4dmessage.content).split('!suggest ');
    (s4dmessage.channel).send({content:String("**Suggestion by " + s4dmessage.author.username + ": " + suggest[1] + "**")});
  }
}
);

// If a user says "!cmds", "!cmd", "!command", "!commands", or "!help", send a message with the contents of cmds.txt
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!cmds' || (s4dmessage.content) == '!cmd' || (s4dmessage.content) == '!command' || (s4dmessage.content) == '!commands' || (s4dmessage.content) == '!help') {
    (s4dmessage.delete()).catch(console.error);
    (s4dmessage.channel).send({content:String("***Commands:***\n\n" + fs.readFileSync('cmds.txt', 'utf8'))});
  }
}
);

// When a users message contains "!play", join the voice channel of the user and play link that the user sends
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content).startsWith('!play')) {
    var play = (s4dmessage.content).split('!play ');
    var voiceChannel = (s4dmessage.member).voiceChannel;
    if (voiceChannel) {
      (voiceChannel).join().then(connection => {
        (connection).playArbitraryInput(play[1]);
      }
      ).catch(console.error);
    }
  }
}
);

                    return s4d
                    })();