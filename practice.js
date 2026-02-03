const friends = ['Elon', 'bill', 'mark', 'waren']
const fd = []
// for (let i = 0; i < friends.length; i++) {
//     // console.log(friends[i])
//     const fds = friends[i]
//     fd.unshift[fds]

// }
// console.log(fd)


for (friend of friends){
    // console.log(friend)
    fd.unshift(friend)
}
console.log(fd)