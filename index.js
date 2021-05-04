const textToDecode = "This is secret. Message about \"_\" symbol!"
const alphabetLower = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}
const alphabetUpper = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26,
}

const encodeDecode = (shift, action) => {
    console.log(shift -( Math.floor(shift/26) *26))
    shift = shift > 26 ? shift -( Math.floor(shift/26) *26) : shift
    const splitedText = textToDecode.split("")
    const lettersInNumbers = splitedText.map((e)=>{
        if (Object.keys(alphabetLower).includes(e)){
            return alphabetLower[e]
        }
        if (Object.keys(alphabetUpper).includes(e)){
            return alphabetUpper[e]
        }
        else return e
    })
    const caseNumbers = splitedText.map((e)=>{
        if (Object.keys(alphabetLower).includes(e)){
            return [alphabetLower[e], "l"]
        }
        if (Object.keys(alphabetUpper).includes(e)){
            return [alphabetUpper[e], "b"]
        }
        else return [e, ""]
    })


    const newLettersInNumbers = lettersInNumbers.map((e)=>{
        if(Object.values(alphabetUpper).includes(e) || Object.values(alphabetLower).includes(e)){
            return  Object.keys(alphabetLower).find((key)=>{

                let needShift = action === "encode" ? e+shift : e-shift
                if (e+shift >26) {
                    needShift = shift - (26 - e)
                }
                if(action === "decode"){
                    if(e-shift <= 0){
                        needShift = 26-Math.abs(shift-e)
                    }
                    else needShift=Math.abs(e-shift)
                }
                return alphabetLower[key] === needShift
            })
        }
        else return e
    })
    const result = newLettersInNumbers.map((e, index)=>{
        if(Object.values(caseNumbers)[index][1] === "b"){
            return e.toUpperCase()
        }
        return e
    })
    console.log(result.join(""))
}



encodeDecode(-1, "encode")