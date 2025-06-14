import { Command } from "./Command";
import { GitRepository } from "./GitRepository";

export class CommitCommands implements Command {
    constructor(private receiver: GitRepository, private message: string) { }

    execute(): void {
        this.receiver.commit(this.message)
    }
}