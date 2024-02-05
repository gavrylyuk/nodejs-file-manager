
import { up } from "../commands/up.js";
import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { cat } from "../commands/cat.js";
import { add } from "../commands/add.js";
import { rn } from "../commands/rn.js";
import { cp } from "../commands/cp.js";
import { mv } from "../commands/mv.js";
import { rm } from "../commands/rm.js";
import { os } from "../commands/os.js";
import { hash } from "../commands/hash.js";
import { compress } from "../commands/compress.js";
import { decompress } from "../commands/decompress.js";

const command = async (command) => {
    console.log(command)

    const commandParts = command.split(' ');
    const commandName = commandParts[0];

    try {
        switch (commandName) {
            case "up":
                if (commandParts.length > 1) throw Error('input');
                up();
                break;
            case "cd":
                if (commandParts.length !== 2) throw Error('input');
                cd(commandParts[1]);
                break;
            case "ls":
                if (commandParts.length > 1) throw Error('input');
                ls();
                break;
            case "cat":
                if (commandParts.length !== 2) throw Error('input');
                cat(commandParts[1]);
                break;
            case "add":
                if (commandParts.length !== 2) throw Error('input');
                await add(commandParts[1]);
                break;
            case "rn":
                if (commandParts.length !== 3) throw Error('input');
                await rn(commandParts[1], commandParts[2]);
                break;
            case "cp":
                if (commandParts.length !== 3) throw Error('input');
                await cp(commandParts[1], commandParts[2]);
                break;
            case "mv":
                if (commandParts.length !== 3) throw Error('input');
                await mv(commandParts[1], commandParts[2])
                break;
            case "rm":
                if (commandParts.length !== 2) throw Error('input');
                await rm(commandParts[1]);
                break;
            case "os":
                if (commandParts.length !== 2) throw Error('input');
                os(commandParts[1]);
                break;
            case "hash":
                if (commandParts.length !== 2) throw Error('input');
                hash(commandParts[1]);
                break;
            case "compress":
                if (commandParts.length !== 3) throw Error('input');
                await compress(commandParts[1], commandParts[2])
                break;
            case "decompress":
                if (commandParts.length !== 3) throw Error("arg");
                await decompress(commandParts[1], commandParts[2])
                break;
            default:
                throw Error('input');
        }
    } catch (error) {
        if (error.message === 'input') {
            console.log('Invalid input');
        } else {
            console.log('Operation failed');
        };
    }

}

export { command };