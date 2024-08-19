var child_process = require("child_process");
var yargs = require("yargs");

async function runSnapshots(storiesList, isDryRun) {
    const stories =
        yargs.argv.stories === undefined ? storiesList : yargs.argv.stories;
    const aStories = stories.split(",");
    const storiesReg = aStories.join("|");
    const storiesRX = `^\\bSkin/\(?:${storiesReg})\\b`;
    const storiesRXString = "\\bSkin/\\(?:" + storiesReg + ")\\b";
    const dryRun = yargs.argv.dry === undefined ? isDryRun : yargs.argv.dry;
    const percyExecutable = dryRun
        ? "snapshots:execute:dry"
        : "snapshots:execute";

    console.log(`
************************************************************
Running Percy Snapshot(s)...
Snapshot(s):         ${stories}
Percy Stories Regex: ${storiesRXString}
Percy Dry Run:       ${dryRun}
Running Snapshot(s)...
************************************************************
	`);

    return child_process
        .spawn("npm", ["run", percyExecutable, storiesRX], { stdio: "inherit" })
        .on("close", function () {
            console.log("\nCompleted\n\n");
        });
}

// public tasks
exports.runSnapshots = runSnapshots;
