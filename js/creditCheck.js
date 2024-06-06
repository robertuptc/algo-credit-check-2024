exports.creditCheck = function(str) {
    let reversed_arr = reversing_array(str)
    let added_two_arr = add_two_e_other_num(reversed_arr)
    return summing_results(added_two_arr)

}


function reversing_array(str) {
    let arr = str.split("")
    let reversed_arr = []

    for (let i = (arr.length) - 1; i >= 0; i--) {
        reversed_arr.push(Number(arr[i]))
    }
    return reversed_arr
}   


function add_two_e_other_num(arr) {
    let added_two = arr.map((x, i) => {
        if (i % 2 !== 0) { 
            if (x * 2 >= 10) {
                return summed_digits_over_10(x * 2)
            } else {
                return x * 2
            }
        } else {
            return x
        }
    })
    return added_two
}


function summed_digits_over_10(num) {
    let arr_num = num.toString().split("")
    let added_numbers = 0
    
    for (let i = 0; i < arr_num.length; i++) {
        added_numbers += Number(arr_num[i])
    }
    return added_numbers
}


function summing_results(arr) {
    let result = arr.reduce((accumulator, value) => accumulator + value)
    return result % 10 === 0  ? "The number is valid!" : "The number is invalid!"
}