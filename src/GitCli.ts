import { AddCommands } from "./AddCommand";
import { Command } from "./Command";
import { CommitCommands } from "./CommitCommand";
import { GitRepository } from "./GitRepository";
import { InitCommand } from "./initCommand";
import { LogCommands } from "./LogCommand";

export class GitCli {
    private commands: Command[] = [];

    constructor(private repo: GitRepository) { }

    init() {
        this.commands.push(new InitCommand(this.repo));
        return this;
    }

    add(file: string) {
        this.commands.push(new AddCommands(this.repo, file))
        return this;
    }

    commit(message: string) {
        this.commands.push(new CommitCommands(this.repo, message))
        return this;
    }

    log() {
        this.commands.push(new LogCommands(this.repo))
        return this;
    }

    run() {
        this.commands.forEach(cmd => cmd.execute());
        this.commands = [];
    }

}