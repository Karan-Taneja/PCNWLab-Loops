/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

    const myArray = [1, 2, 3, 4, 5, -6]

    const removeNegatives = array => {

        const newArray = []

        array.forEach(function(currentItem) {

            if(currentItem < 0){
                newArray.push((currentItem * -1))
            }
            else {
                newArray.push(currentItem)
            }

        })

        return newArray
    
    }

    // console.log(removeNegatives(myArray))


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

        let output = -1

        array.forEach(function (currentItem) {

            if(currentItem === value){
                output = array.indexOf(currentItem)
            }

        })

        return output
    
    }

    // console.log(findVal(myArray, 1))
    // console.log(findVal(myArray, 66))


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

        const newArray = []

        array.forEach(function (currentItem) {

            if (currentItem % 2 === 0){
                newArray.push(currentItem)
            }

        })

        return newArray

    }

    // console.log(removeOdds(myArray))


/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/

const addSquares = array => {

    const newArray = [...array]

    array.forEach(function (currentItem) {

        newArray.push((currentItem ** 2))

    }) 

    return newArray
}

// console.log(addSquares(myArray))


/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = array => {

    const newArray = []

    array.forEach(function (currentItem){

        newArray.push(currentItem, currentItem)

    })

    return newArray

}

// console.log(doubleify(myArray))


/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

const findMax = array => {

    let max = array[0]

    array.forEach(function (currentItem) {

        if (currentItem > max){
            max = currentItem
        }

    })

    return max

}

console.log(findMax(myArray))
