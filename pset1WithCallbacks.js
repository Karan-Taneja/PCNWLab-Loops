/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const myArray = [1, 2, 3, 4]

const average = array => {

    let sum = 0

    array.forEach(function(currentItem) {
        return sum += currentItem
    })

    return sum / array.length
}

// console.log(average(myArray))

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = array => {

    const newArray = []

    array.forEach(function(currentItem) {

        newArray.push(currentItem ** 2)

    })

    return newArray

}

// console.log(squareEach(myArray))

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
    return average(squareEach(array))
}

// console.log(averageSquare(myArray))

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = array => {

    const newArray = []

    array.forEach(function(currentItem) {

        newArray.push(currentItem * -1)

    })

    return newArray

}


/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = array => {

    const newArray = []

    array.forEach(function(currentItem) {

        newArray.unshift(currentItem)

    })

    return newArray
}

// console.log(reverseArr(myArray))

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = array => {

    return negateArr(reverseArr(array))

}

console.log(negateBackwards(myArray))