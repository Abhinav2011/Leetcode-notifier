// const { Client, GatewayIntentBits } = require('discord.js');
import { Client, GatewayIntentBits } from "discord.js";
import getRandomProblemFromBot from "./bot.js";
import "dotenv/config";



const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`); //message when bot is online
});

/*
 Returns all commands available for this discord bot

*/
client.on("messageCreate",(message) => {
  if(message.content.toLowerCase() === "help"){
    const allCommands = ["random","easy","medium","hard","notify"];
    let helpMsg = "To get started with using this bot, type any of the following commands" + "\n";
    allCommands.forEach((command,index) => {
      helpMsg += `**${index + 1}) ${command}**`;
      helpMsg += "\n";
    });
    console.log(helpMsg);
    message.reply(helpMsg);
  }
});
/*
 Returns a random problem from leetcode when the message "random" is typed 
*/
client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "random") {
    const randomQuestionName = await getRandomProblemFromBot("HARD");
    const name = randomQuestionName.data.randomQuestion.titleSlug;
    const url = `https://leetcode.com/problems/${name}`
    message.reply(url);
  }
});

/*
Returns a hard random problem from leetcode when the message "hard" is typed
*/
client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "hard") {
    const randomQuestionName = await getRandomProblemFromBot("HARD");
    const name = randomQuestionName.data.randomQuestion.titleSlug;
    const url = `https://leetcode.com/problems/${name}`
    message.reply(url);
  }
});

/*
Returns a medium random problem from leetcode when the message "medium" is typed
*/
client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "medium") {
    const randomQuestionName = await getRandomProblemFromBot("MEDIUM");
    const name = randomQuestionName.data.randomQuestion.titleSlug;
    const url = `https://leetcode.com/problems/${name}`
    message.reply(url);
  }
});

/*
Returns a easy random problem from leetcode when the message "easy" is typed
*/
client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "easy") {
    const randomQuestionName = await getRandomProblemFromBot("EASY");
    const name = randomQuestionName.data.randomQuestion.titleSlug;
    const url = `https://leetcode.com/problems/${name}`
    message.reply(url);
  }
});


client.login(process.env.TOKEN);
