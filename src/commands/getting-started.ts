import { SlashCommandBuilder } from '@discordjs/builders';
import { ImportCommand } from '../models/ImportCommand';

export = {
    data: new SlashCommandBuilder()
        .setName('getting-started')
        .setDescription('Replies with getting started page for Meshtastic'),
    async execute(interaction) {

        return interaction.reply('https://meshtastic.org/docs/getting-started');

    },
} as ImportCommand;