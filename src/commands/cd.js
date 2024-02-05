const cd = (path) => {
    let newPath = path;
    process.chdir(newPath);
}

export { cd };