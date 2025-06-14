import { Command } from "./Command";
import { GitRepository } from "./GitRepository";

export class AddCommands implements Command {
    constructor(private receiver: GitRepository, private file: string) { }

    execute(): void {
        this.receiver.add(this.file)
    }
}