import { opendir, stat } from "node:fs/promises";
import { join } from "node:path";

const ls = async () => {
    const currentDir = await opendir(process.cwd());
    const dirNameList = [];
    const fileNameList = [];
    for await (const dirent of currentDir) {
        const direntPath = join(dirent.path, dirent.name);
        try {
            const isFile = (await stat(direntPath)).isFile();
            if (isFile) {
                fileNameList.push({ Name: dirent.name, Type: 'file' })
            } else {
                dirNameList.push({ Name: dirent.name, Type: 'directory' })
            }
        } catch {
            
        }

    }
    console.table([...dirNameList, ...fileNameList]);
}

export { ls };