let myArray = [1, 2, 4];

//map, filter
const newArray = myArray.map((number) => {
    return number*2;
})

console.log(myArray);
console.log(newArray);

const arrObj = [{ name: 'Sandra', age: 21},{ name: 'Dalia', age: 21}]
const newArryObj = arrObj.map((obj) => {
    return obj.name;
})
console.log(newArryObj)

const justSandra = arrObj.filter((obj) => {
    return obj.name === 'Sandra'
}).map((obj) => {
    return obj.name;
})

console.log(justSandra)
