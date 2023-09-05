let names = ['anton','djamal','bilal','deni','maga','aslan']

let newArr = []

for(let i = 0; i < names.length; i++) {
    if (names[i].slice(0,1) === 'a') {
        newArr.push(names[i])
    }
}
console.log(newArr)