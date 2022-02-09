import * as env from 'dotenv';
import * as fs from 'fs';
import { Client, Collection, Intents } from 'discord.js';
import { ImportCommand } from './models/ImportCommand';
import deployCommand from './deploy-command';

env.config();


deployCommand.deploy();

const commands = new Collection<string, ImportCommand>();
const files = fs.readdirSync('dist/commands').filter(file => file.endsWith('.js'));
for (const file of files) {
  const command = require(`./commands/${file}`) as ImportCommand;
  commands.set(command.data.name, command);

}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', async () => {
  console.log('ready');
});

client.once('shardReconnecting', (id) => {
  console.log(`Shard with ID ${id} reconnected`);
});

client.once('shardDisconnect', (event, shardID) => {
  console.log(`Disconnected from event ${event} with ID ${shardID}`);
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const cmd = commands.get(interaction.commandName);
  if (!cmd) return;
  try {
    await cmd.execute(interaction);
  } catch (error) {
    console.error(error);
  }
});

client.login(process.env.DISCORD_TOKEN);