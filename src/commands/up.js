const up = () => {
    process.chdir('..');
    // console.log(`Location was changed to ${process.cwd()}`);
}

export { up };