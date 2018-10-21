/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [3]
               getMiddle([1,2,3,4]); // [2,3]
*/

const getMiddle = array => {

    const nuArray = [...array]
    const index = nuArray.length / 2

    if (index % 2 !== 0){

        return [nuArray[Math.floor(index)], nuArray[Math.ceil(index)]]

    }

    return [nuArray[index]]

}

console.log(getMiddle([1, 2, 3]))
console.log(getMiddle([1, 2, 3, 4]))


/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/

const addToMiddle = (array, num) => {

    let nuArray = [...array]
    let middleIndex = nuArray.length / 2

    if (middleIndex % 2 !== 0){

       nuArray.splice(Math.ceil(middleIndex), 0, num)
       return nuArray

    }

    nuArray.splice(middleIndex, 0, num)
    return nuArray

}

console.log(addToMiddle([1, 2, 3], "lulz"))
console.log(addToMiddle([1, 2, 3, 4], "lulz"))


/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/

const hasAtSymbol = email => {

    for(i = 0; i < email.length; i++){

        if (email[i] === "@"){
            return true
        }

    }

    return false
}

console.log(hasAtSymbol("karan.tk.taneja@gmail.com"))
console.log(hasAtSymbol("I'm so friggin tired."))

/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/

const capitalize = string => {

    const firstCharacter = (string.slice (0,1)).toUpperCase()
    const restofString = string.slice(1, string.length)
    const finalString = firstCharacter + restofString

    return finalString
}

console.log(capitalize("tKhaos"))

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/

const isAllUpperCased = string => {

    if(string === string.toUpperCase()){
        return true
    }

    return false
}

/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

const capitalizeEachWord = string => {

    if(typeof string !== "string" || string.length === 0) {
        return "Not a valid string fam"
    }

    let stringArray = string.split(" ")

    for (let i = 0; i < stringArray.length; i++){
        let currentString = capitalize(stringArray[i])
        stringArray[i] = currentString
    }
   
    return stringArray.join(" ")
}

console.log(capitalizeEachWord("The quick brown fox jumped over the lazy dog."))

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

const capitalizeEachWordExcept = string => {

    if(typeof string !== "string" || string.length === 0) {
        return "Not a valid string fam"
    }

    let stringArray = string.split(" ")

    for (let i = 0; i < stringArray.length; i++){

        let lowered = stringArray[i].toLowerCase()

        if(lowered !== "the" && lowered !== "and" && 
           lowered !== "a" && lowered !== "on"){

               let currentString = capitalize(stringArray[i])
               stringArray[i] = currentString
           }
    }
   
    return stringArray.join(" ")
}

console.log(capitalizeEachWordExcept("The cow and a fox went on the trip"))


/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

const findAtMentions = string => {

    stringArray = string.split(" ")
    atMentions = []
    
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i][0] === "@"){
            atMentions.push(stringArray[i])
        }
    }

    return atMentions

}

console.log(findAtMentions("@realdonaldtrump, you NaN dicked biiiiiiitch. Sincerely @TKhaos"))

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

const roundToN = (num, decimalPlaces) => {

    return num.toFixed(decimalPlaces)

}

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]]
    ]); // [1,2,3,4,5,6,7,8,9]
*/

const addArrays = arrays => {

    const nuArray = arrays.join(",")

    return nuArray.split(",")
    
}

console.log(addArrays([[1,2,3],[4,5],[6,7,8,9]]))