import { rm as remove } from "node:fs/promises";

const rm = async (pathTofile) => {

    try {
        await remove(pathToFile);
        console.log(`file was succesfuly removed`);
    } catch (err) {
        console.log(`Operation failed: ${err?.message}`);
    }
}

export { rm };