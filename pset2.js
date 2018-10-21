/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

    const removeNegatives = array => {

        const nuArray = [...array]

        for (i = 0; i < nuArray.length; i++){

            if (nuArray[i] < 0){
                nuArray[i] *= -1
            }
        }

        return nuArray
    
    }

    console.log(removeNegatives([-1, -2, 3, 4, -5]), "remove negatives")

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/

    const findVal = (array, value) => {

        let i = 0

        while (i < array.length && array[i] !== value){
            i++
        }

        if (array[i] === value){
            return i
        }
        
        return -1
    
    }

    console.log(findVal([1, 2, 3, 4], 2), "find value")


/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

    const removeOdds = array => {

        const nuArray = array

        for (i = 0; i < nuArray.length; i++){

            if (nuArray[i] % 2 !== 0){
                nuArray.splice(i, 1)
            }

        }

        return nuArray

    }

    console.log(removeOdds([1, 2, 3, 4]), "remove odds")


/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/

const addSquares = array => {

    const length = array.length
    const nuArray = [...array]


    for (i = 0; i < length; i++) {

        nuArray.push((array[i] ** 2))
    }

    return nuArray

}

console.log(addSquares([1, 2, 3, 4]), "add squares")

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = array => {
    const nuArray = [...array]

    for (i = 0; i < nuArray.length; i++){

    if (nuArray[i] !== nuArray[i - 1])
        nuArray.splice(i, 0, nuArray[i])

    }

    return nuArray
}

console.log(doubleify([1,2,3,4]), "double")


/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

const findMax = array => {

    let largest = array[0]

    for (i = 0; i < array.length; i++){

        if(array[i] > largest){

            largest = array[i]

        }
    }

    return largest

}

console.log(findMax([1, 2, 4, 3]), "max")