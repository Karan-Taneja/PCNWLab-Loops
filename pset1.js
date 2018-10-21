/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const average = array => {

    let total = 0

    for (let i = 0; i < array.length; i++){
        total += array[i]
    }

    return total / array.length
}

console.log(average([1, 2, 3, 4]))
console.log(average([11, 2, 14, 37, 9]))

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = array => {

    const nuArray = [...array]

    for (let i = 0; i < nuArray.length; i++){
        nuArray[i] = nuArray[i] ** 2
    }

    return nuArray
}

console.log(10 **= 2)
console.log(squareEach([1, 2, 3, 4]))

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/


const averageSquare = array => {

    const nuArray = [...array]

    return average(squareEach(nuArray))
    
}

console.log(averageSquare([1, 2, 3, 4]))

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = array => {

    const nuArray = [...array]

    for (let i = 0; i < nuArray.length; i++){
        nuArray[i] *= -1
    }

    return nuArray

}

console.log(negateArr([1,2,3,4]))

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = array => {

    const nuArray = []

    for (let i = array.length -1; i >= 0; i--){
        nuArray.push(array[i])
    }

    return nuArray

}

console.log(reverseArr([1,2,3,4]))

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = array => {

    let nuArray = reverseArr(negateArr(array))

    return nuArray

}

console.log(negateBackwards([1,2,3,4]))
