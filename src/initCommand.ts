import { Command } from "./Command";
import { GitRepository } from "./GitRepository";

export class InitCommand implements Command {

    constructor(private receiver: GitRepository) { }

    execute(): void {
        this.receiver.init();
    }
}