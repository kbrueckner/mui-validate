const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const package = require('../package.json');

console.log(`Current package version: ${package.version}`);

readline.question('Is the set version correct for this release? (y/n): ', (answer) => {
    readline.close();

    if (answer.toLowerCase() !== 'y') {
        console.log(`Cancelled release`);
        return;
    }

    const releasePackage = { ...package };
    delete releasePackage.devDependencies;
    delete releasePackage.scripts;

    try {
        fs.writeFileSync('dist/package.json', JSON.stringify(releasePackage));
        fs.copyFileSync('README.md', 'dist/README.md');

        require('child_process').execSync('npm publish dist');
    } catch (err) {
        console.error(err);
    }

    console.log('Package released');
});
