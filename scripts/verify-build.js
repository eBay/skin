const { spawn } = require("child_process");

async function executeProcess(cmd, arg) {
    return new Promise((resolve, reject) => {
        const resp = spawn(cmd, arg);

        resp.stdout.on("data", (data) => {
            console.log(data.toString());
        });

        resp.on("close", (code) => {
            if (code !== 0) {
                reject();
            } else {
                resolve();
            }
        });

        resp.on("exit", (code) => {
            if (code !== 0) {
                reject();
            } else {
                resolve();
            }
        });
    });
}

async function runCmd(cmd, arg, err) {
    try {
        await executeProcess(cmd, arg);
    } catch (e) {
        console.error(err);
        process.exit(1);
    }
}

async function verifyBuild() {
    await runCmd("npm", ["run", "build"], "Build failed");
    await runCmd("npm", ["run", "postpublish"], "Postpublish failed");

    await runCmd(
        "git",
        ["update-index", "--refresh"],
        "Failed to update index, unchecked files found"
    );
    await runCmd(
        "git",
        ["diff-index", "--quiet", "HEAD", "--"],
        "Unchecked-in files found in codebase"
    );
}

module.exports = { verifyBuild };
