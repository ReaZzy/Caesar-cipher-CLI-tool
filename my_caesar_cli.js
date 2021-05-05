const {pipeline} = require( "stream" )
const {writeStream, transformStream, readStream} = require( "./streams" )

pipeline(
    readStream || process.stdin,
    transformStream,
    writeStream || process.stdout,
    (err) => {
        err ? process.stderr.write("Failed") : process.stdout.write("Success")
    }
)

