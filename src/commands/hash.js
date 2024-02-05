const hash = async (pathToFile) => {
    const ch = createHash('sha256');
    const input = createReadStream(pathToFile);
    input.pipe(ch).setEncoding('hex').pipe(stdout);
    stdout.on('unpipe', () => console.log(''));
}

export { hash };