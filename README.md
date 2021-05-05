# Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

# How to use
1. **Clone my repo**: `git clone --branch task1/Caesar-cipher-CLI-tool https://github.com/ReaZzy/Caesar-cipher-CLI-tool.git`
2. **Change directory to my repo**: `cd <repo-path>`
3. **Install nmp packages**: `npm i`
4. **Start CLI**: `node my_caesar_cli <options>`

**Optional**
Also you can create files for input and output for better experience

**Example**:`node my_caesar_cli -s 1 -a encode -o output.txt -i input.txt`
