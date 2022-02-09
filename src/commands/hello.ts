import { SlashCommandBuilder } from '@discordjs/builders';
import { ImportCommand } from '../models/ImportCommand';

export = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies with `hello <username>`'),
    async execute(interaction) {

        const user = interaction.options.getUser('target');


        if (user) {
            return interaction.reply(`Hello ${user.username}`);
        } else {
            return interaction.reply(`Hello <@${interaction.user.id}>!`);
        }

    },
} as ImportCommand;