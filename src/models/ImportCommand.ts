import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export interface ImportCommand {
    data: SlashCommandBuilder;
    execute(interaction:CommandInteraction): Promise<void>;
}