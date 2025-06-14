# Git CLI (TypeScript) — Command & Builder Pattern Example

A simple, extensible, in-memory Git-like CLI implemented in TypeScript, demonstrating the classic **Command** and **Builder** design patterns for clean, expressive code orchestration. This project is perfect for learning, teaching, or scaffolding more complex CLI automation!

## ✨ Features

- **Command Pattern**: All actions (init, add, commit, log) are first-class command objects
- **Builder Pattern**: Chain commands fluently for batch execution (scripting/macro style)
- **Extensible**: Easily add more commands (branch, checkout, undo, etc.)
- **Type-safe**: Strongly typed in TypeScript for reliability
- **No Dependencies**: Pure TypeScript, no external libraries

## 🚀 Quickstart

1. Clone this repo

    ```bash
git clone https://github.com/mohsenDevelop/git-cli-demo.git
cd git-cli-typescript
    ```

2. Install TypeScript (if not installed):

    ```bash
npm install -g typescript
    ```

3. Run the example:

    ```bash
npx ts-node src/main.ts
    ```

    _or if you prefer to compile:_

    ```bash
tsc && node dist/main.js
    ```

## 🛠 Example Usage

```typescript
import { GitRepository } from './GitRepository';
import { GitCliBuilder } from './GitCliBuilder';

const repo = new GitRepository();

new GitCliBuilder(repo)
.init()
.add('README.md')
.add('main.ts')
.commit('Initial commit with README and main')
.log()
.run();
