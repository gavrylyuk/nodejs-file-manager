import { homedir } from 'node:os';
import { cwd, chdir } from "node:process";
import { userName } from './utils/user.js';
import { startCLI } from './main/startCLI.js';

const runApp = async () => {
    process.chdir(homedir());
    console.log(`Welcome to the File Manager${userName ? ', ' : ''}${userName}!`);
    console.log(`You are currently in ${process.cwd()}`);
    try {
        await startCLI();
    } catch {
        console.log('Operation failed');
    }
}

runApp();