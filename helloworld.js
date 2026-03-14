// let dice = 0 
// let count = 0

// while (dice !== 6) {
//     dice = Math.floor(Math.random() * 6) + 1
//     count++
//     console.log(`ทอยครั้งที่ ${count} : ได้เลข ${dice}`)
// }

// console.log(`จบเกม! ทอยไปทั้งหมด ${count} ครั้งกว่าจะได้เลข 6`)

// const fruits = ['apple', 'banana', 'orange']

// for (let i = 0 ; i <fruits.length ; i++) {
//     console.log(`ลำดับที่ ${i} คือ ${fruits[i]}`)
// }

// function sudkoon(num) {
//     for (let i = 1; i <= 12; i++) {
//     console.log(`${num} x ${i} = ${num*i}`)
//     }
// }
// sudkoon(5)


// const calculateTotal = (price) => {
//     const vat = price * 0.07
//     return price + vat
// }

// let item1 = calculateTotal(100)
// let item2 = calculateTotal(345)

// console.log(`ราคาสินค้าชิ้นแรก คือ ${item1} บาท`)


const users = [
    {name: 'Alice', age: 15},
    {name: 'Bob', age: 22},
    {name: 'Charlie', age:18},
    {name: 'David', age: 12},
]

let adults = users.filter((person) => {
    return person.age >= 18
})

console.log(adults)

