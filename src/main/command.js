import { ls } from "../commands/ls.js";

const command = async (command) => {
    console.log(command)

    const commandParts = command.split(' ');
    const commandName = commandParts[0];

    try {
        if (!commandName) throw Error("input");
        if (commandName === 'ls') ls();

    } catch (error) {
        if (error.message === "input") {
            console.log(`Invalid input`);
        } else {
            console.log(`Operation failed: ${error?.message}`)
        };
    }

}

export { command };