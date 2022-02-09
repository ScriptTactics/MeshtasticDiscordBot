import { Collection, Message } from 'discord.js';

export interface Command {
    name: string;
    args: boolean;
    description: string;
    usage: string;
    execute(commandArgs: CommandArgs): void;
}
export interface CommandArgs {
    msg: Message;
    args: string[];
    commands: Collection<unknown, unknown>;
}