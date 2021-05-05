const fs = require( "fs" )
const {Transform} = require( "stream" )
const encodeDecode = require( "./cipher" )
const options = require( "./options" )
if (options.output && !fs.existsSync(options.output) || options.input && !fs.existsSync(options.input)){
    process.stderr.write(`Invalid output/input file (Exit code 2)`)
    process.exit(2)
}


const transformStream = new Transform( {
    transform(chunk, encoding, callback) {
        this.push( encodeDecode( chunk.toString(), +options.shift , options.action ) )
        callback()
    }
} )
const writeStream = fs.existsSync(options.output) && fs.createWriteStream( `${options.output}` , {flags:"a"})
const readStream = fs.existsSync(options.input) && fs.createReadStream( `${options.input}` )


module.exports.writeStream = writeStream
module.exports.transformStream = transformStream
module.exports.readStream = readStream