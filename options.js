const {Command} = require("commander")

const program = new Command()

program.option("-s, --shift <shift>", "a shift")
program.option("-i, --input <input>", "an input file")
program.option("-o, --output <output>", "an output file")
program.option("-a, --action <action>", "an action encode/decode")
program.parse();

const options = program.opts()

if(!options.shift || !options.action) {
    process.exitCode = 1
    process.stderr.write(`Shift and action parameters is required (Exit code ${process.exitCode})`)
    process.exit(1)
}

module.exports = options