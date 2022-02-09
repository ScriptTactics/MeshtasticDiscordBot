import { SlashCommandBuilder } from '@discordjs/builders';
import { ImportCommand } from '../models/ImportCommand';

export = {
    data: new SlashCommandBuilder()
        .setName('esp')
        .setDescription('Replies with ESP Flashing page for Meshtastic'),
    async execute(interaction) {

        return interaction.reply('https://meshtastic.org/docs/getting-started/flashing-esp32');

    },
} as ImportCommand;