import { GitCli } from "./GitCli";
import { GitRepository } from "./GitRepository";

const repo = new GitRepository();

new GitCli(repo)
    .init()
    .add('README.md')
    .add('main.ts')
    .commit("Initial commit with README and main")
    .log()
    .run()
