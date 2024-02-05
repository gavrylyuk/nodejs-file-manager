import { homedir } from 'node:os';

const runApp = async () => {
    process.chdir(homedir());
    console.log(`Welcome to the File Manager, Username!`);

}

runApp();