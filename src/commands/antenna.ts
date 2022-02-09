import { SlashCommandBuilder } from '@discordjs/builders';
import { ImportCommand } from '../models/ImportCommand';

export = {
    data: new SlashCommandBuilder()
        .setName('antenna')
        .setDescription('Replies with Antenna page for Meshtastic'),
    async execute(interaction) {
        return interaction.reply('https://meshtastic.org/docs/hardware/antenna');
    },
} as ImportCommand;

