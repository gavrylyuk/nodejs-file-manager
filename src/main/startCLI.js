import { cwd } from "node:process";
import { createInterface } from 'node:readline/promises';
import { command } from './command.js';
import { stopCLI } from "./stopCLI.js";


const startCLI = async () => {
    const cli = createInterface({ input: process.stdin, output: process.stdout, prompt: 'Type here > ' });

    cli.on('line', async (data) => {

        if (data === '.exit') {
            stopCLI(cli);
        } else {
            console.log(`You are currently in ${cwd()}`);
            await command(data);
        }
    })

    cli.on('SIGINT', () => stopCLI(cli));

}

export { startCLI };