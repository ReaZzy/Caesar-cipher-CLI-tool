const {Command} = require("commander")

const program = new Command()

program.option("-s, --shift <shift>", "a shift")
program.option("-i, --input <input>", "an input file")
program.option("-o, --output <output>", "an output file")
program.option("-a, --action <action>", "an action encode/decode")
program.parse();

const options = program.opts()

if(!options.shift || !options.action ) {
    process.exitCode = 1
    process.stderr.write(`Shift and action parameters is required (Exit code ${process.exitCode})`)
    process.exit(1)
}
if (options.shift){
    if( isNaN(+options.shift) ){
        process.exitCode = 5
        process.stderr.write(`Shift must be a number (Exit code ${process.exitCode})`)
        process.exit(5)
    }
    if(+options.shift % 1 !== 0){
        process.exitCode = 6
        process.stderr.write(`Shift must be integer, not float (Exit code ${process.exitCode})`)
        process.exit(6)
    }
}
if(options.action){
    if(options.action.toString() !== "decode" &&  options.action.toString() !== "encode"){
        process.exitCode = 4
        process.stderr.write(`Action must be or encode either decode (Exit code ${process.exitCode})`)
        process.exit(4)
    }
}


module.exports = options