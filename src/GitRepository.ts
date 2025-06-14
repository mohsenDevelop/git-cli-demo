export class GitRepository {
    private files: Set<string> = new Set();
    private stagedFiles: Set<string> = new Set();
    private commits: Array<{ message: string, files: Set<string> }> = [];

    init() {
        console.log('Initialized empty Git repository');
        this.files = new Set();
        this.stagedFiles = new Set();
    }

    add(file: string) {
        if (!this.files.has(file)) {
            this.files.add(file);
            console.log(`File ${file} does not exist, Creating a new file`);
        }

        this.stagedFiles.add(file);
        console.log(`Added ${file} to staging area`);
    }

    commit(message: string) {
        if (this.stagedFiles.size === 0) {
            console.log("No changes to commit");
            return;
        }

        this.commits.push({ message, files: new Set(this.stagedFiles) });
        this.stagedFiles.clear();
        console.log(`Committed changes with message ${message}`)
    }

    log() {
        if (this.commit.length === 0) {
            console.log("No commits yet")
            return;
        }

        for (const commit of this.commits) {
            console.log(`Commit: ${commit.message}`)
        }
    }
}