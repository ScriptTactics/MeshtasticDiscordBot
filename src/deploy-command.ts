import { Routes } from 'discord-api-types/v9';
import { REST } from '@discordjs/rest';
import * as fs from 'fs';
import { DeployCommands } from './models/DeployCommand';
export = {
  deploy() {
    const guildID = process.env.GUILDID;
    const clientID = process.env.CLIENTID;

    const commands = [];
    const commandFiles = fs
      .readdirSync('dist/commands')
      .filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      commands.push(command.data.toJSON());
    }

    const r = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

    (async () => {
      try {
        console.log('Started refreshing application (/) commands.');

        await r.put(Routes.applicationGuildCommands(clientID, guildID), {
          body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
    })();
  },
} as DeployCommands;
