/**
 * looping technique 
 * 1. for loop 
 * 2.while loop 
 * 3.do while --> ignore
 * 4. for of ----> array loop korar junno 
 * 5. for in --> object loop korar junno 
 */

const friends = ['Elon', 'bill', 'mark', 'waren']

for (const friend of friends) {
    // console.log(friend)
}

for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i])
}


const numbers = [12, 12, 23, 234, 23, 43, 45234, 523, 45, 23, 45, 234, 5, 234, 5, 23, 45, 23, 45, 23, 45, 23, 45, 23, 45, 23, 45, 23]

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
}


let i = 0;
while (i < numbers.length) {
    console.log(numbers[i])
    i++
}

