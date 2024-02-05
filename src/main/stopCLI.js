import { userName } from '../utils/user.js';

const stopCLI = (cli) => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    cli.close();
}

export { stopCLI };