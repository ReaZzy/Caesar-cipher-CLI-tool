const {alphabetLower, alphabetUpper} = require("./alphabets")

const encodeDecode = (textToDecode, shift, action) => {

    shift = shift > 26 ? shift - (Math.floor(shift/26) *26) : shift < - 26 ?  shift -(Math.floor(shift/26) *26) : shift

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
            return e?.toUpperCase()
        }
        return e
    })
    return result.join("")
}

module.exports = encodeDecode