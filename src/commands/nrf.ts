import { SlashCommandBuilder } from '@discordjs/builders';
import { ImportCommand } from '../models/ImportCommand';

export = {
    data: new SlashCommandBuilder()
        .setName('nrf')
        .setDescription('Replies with NRF Flashing page for Meshtastic'),
    async execute(interaction) {
        return interaction.reply('https://meshtastic.org/docs/getting-started/flashing-nrf52');

    },
} as ImportCommand;