//q1

let prices = [100, 250, 500, 150, 700]

let PremiumArr = prices.filter((prices)=>prices>300)
console.log(PremiumArr);


//q2
// let marks = [80,90,70,85,95]
// let sum = 0;
// for(i=0; i < marks.length; i++){
//     sum +=marks[i]
    
// }
// console.log(sum)

//or

// let marks = [80, 90, 70, 85, 95]

// let total = marks.reduce((acc, currentValue)=>{
//     return acc + currentValue
// },0)
// const avg = total/marks.length;
// console.log(avg)


//q3

// let numbers = [1,2,3, 2, 4, 2,5,1,1,1];
// let count = {}
// for(let i =0; i< numbers.length; i++){
//     let num = numbers[i];
//     if(count[num]){
//         count[num] = count[num]+1
//     } else {
//         count[num] = 1;
//     }
// }
// let Frequency =0;
// let mostFrequent;
// for(let key in count){
//     if(count[key]>Frequency){
//         Frequency = count[key]
//         mostFrequent = key
//     }
// }
// console.log(mostFrequent)


//q4
let user = {
    name: "ritik",
    age:20
}

user.age = 21;

console.log(user);