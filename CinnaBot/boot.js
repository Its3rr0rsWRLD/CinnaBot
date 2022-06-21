const version = "0.0.9 Developer Build"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function load(){
console.log(`
entering BIOS please wait....`)
console.clear()
console.log(`
CinnaBot Loaded. Version: ${version}`)
console.log(`
Code Loaded!
`)
require("./bot")
}
load()