import { Command } from "./Command";
import { GitRepository } from "./GitRepository";

export class LogCommands implements Command {
    constructor(private receiver: GitRepository) { }

    execute(): void {
        this.receiver.log()
    }
}