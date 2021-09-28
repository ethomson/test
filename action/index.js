const { promisify } = require("util")
const core = require("@actions/core")

const setTimeoutAsync = promisify(setTimeout)

async function run() {
    try {
        core.info("Starting the action...")
        console.log("We are now acting.")
        core.setFailed("this is a failed action")
        console.log("However the action is still running.")
        console.log("setFailed only sets the failure state")
        console.log("the action itself keeps running.  (Though by")
        console.log("default the workflow will stop on this step.")
        setTimeoutAsync(5000)
        core.info("done.")
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
