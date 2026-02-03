const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(numbers)
// const reverse = numbers.reverse()
// console.log(reverse)
const rev_numbers = [];

for (const num of numbers) {
    // console.log(num)
    // rev_numbers.unshift(num)
}
// console.log(rev_numbers)

const revs_numbers = []
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    // revs_numbers.unshift(i)
}
// console.log(revs_numbers)

const revse_numbers = []
for (let i = numbers.length - 1; i >= 0; i--){
    // console.log(numbers[i])
    revse_numbers.push(i)
}
console.log(revse_numbers)