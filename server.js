const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setPresence({ status: "dnd" }); //sets presence
  client.user.setActivity(
    `for Vhelp | Support this bot by adding it to your server!`,
    { type: "WATCHING" }
  );
});
client.on("warn", info => console.log(info));
client.on("error", console.error);

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on("message", message => {
  if (message.content === "oo") {
    message.channel.send("pong");
  }
});
client.on("message", message => {
  if (message.content === "Vinfo") {
    message.author.send(
      "**ThisIsaName** was created for being a call and response bot thats never gonna give you up"
    );
    message.author.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    message.author.send(";)");
    message.author.send("Creators: Fozian#8859 and SirPiggleWiggle#4372");
    message.author.send("Created: 2/21/2021");
  }
});

client.on("message", message => {
  if (message.content === "Vhow was your day") {
    message.channel.send("Shut Up");
  }
});

client.on("message", message => {
  if (message.content === "Veaster egg") {
    message.channel.send(
      "I HAVE BEEN PLAYING SLIME RANCHER FOR 82 HOURS. THATS NOT OBSESSIVE IS IT!!!!!!! NO YOUR OBSESSIVE NOT ME IM PERFECTLY FINE!!!!! :upside_down: :upside_down_face:"
    );
  }
});

client.on("message", message => {
  if (message.content === "Vschool is fun") {
    message.channel.send("Get a life :rolling_eyes:");
  }
});
//𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐟𝐨𝐫 𝐓𝐈𝐀𝐍:
client.on("message", message => {
  if (message.content === "Vping") {
    message.channel.send("Pong!");
  }
});

client.on("message", message => {
  if (message.content === "Vhelp") {
    message.author.send("𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐟𝐨𝐫 𝐓𝐈𝐀𝐍:");
    message.author.send(
      "𝐕𝐢𝐧𝐟𝐨 -- :smile:  About the bot. :smile: | 𝐕𝐩𝐢𝐧𝐠 -- Sends 3 Pongs!"
    );
    message.author.send(" 𝐕𝐡𝐢-- Hello! :wave: | 𝐕𝐡𝐨𝐰 𝐰𝐚𝐬 𝐲𝐨𝐮𝐫 𝐝𝐚𝐲 -- Shut up.");
    message.author.send("𝐕𝐬𝐜𝐡𝐨𝐨𝐥 𝐢𝐬 𝐟𝐮𝐧 -- Get a life :rolling_eyes: | ");
  }
});

//chris area

client.on("message", message => {
  if (message.content === "Vhi") {
    message.channel.send("Hello! :wave: ");
  }
});

client.on("message", message => {
  if (message.content === "Vping") {
    message.channel.send("Pong!");
  }
});

client.on("message", message => {
  if (message.content === "Vping") {
    message.channel.send("Pong!");
  }
});

client.login(process.env.token);

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);

client.on("message", message => {
  if (message.content === "Vgood morning") {
    message.reply("Says you :sob:");
  }
});

client.on("message", message => {
  if (message.content === "Vwhat is your hobby") {
    message.channel.send("Knitting! :yarn: :older_woman: ");
  }
});

client.on("message", message => {
  if (message.content === "Vwhat is your favorite snack") {
    message.channel.send("Chez :cheese: no question about it.");
  }
});

client.on("message", message => {
  if (message.content === "Vhows life") {
    message.channel.send("(Why do I even try anymore :man_facepalming:)");
  }
});

client.on("message", message => {
  if (message.content === "Vsurprise me") {
    message.channel.send("Rick Roll :stuck_out_tongue_closed_eyes:");
  }
});

client.on("message", message => {
  if (message.content === "Vgoodnight") {
    message.channel.send("ZZZZZzzzz :sleeping: :bed:");
  }
});

client.on("message", message => {
  if (message.content === "VFaveGame") {
    message.channel.send("AC:NH all the way. :sunglasses:");
  }
});
