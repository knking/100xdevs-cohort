
// Array
// Object

// 1.Write a program prints all the even numbers in an array 

const myArr=[4,5,68,7,9,10,23,35,46,78]

for(let i=0;i< myArr.length;i++){
    if(myArr[i] % 2=== 0){
        console.log(myArr[i])
    }
}

// 2. Write a program to print the biggest number in an arrya 
const myArr2=[100,45,7,56,34,89,23]
let max=myArr2[0]

for(let i=0; i < myArr2.length; i++){
if(myArr2[i] > max){
    max=myArr2[i]
}
}
console.log("Greates number in an array "+max)
// 3. Write a program that prints all the male people’s first name given a complex object 

const details = [
    {
        name:"krishna",
        gender:"male"
    },
    {
        name:"sammy",
        gender:"female"
    },
    {
        name:"jon",
        gender:"female"
    },
    {
        name:"lado",
        gender:"female"
    },
    
]

for(let i =0;i<details.length;i++){
    if(details[i].gender==="female"){
        console.log(details[i].name[0])
    }
}

// 4. Write a program that reverses all the elements of an array

const myArr3=[1,4,"name","demo",9]

// Below method does not modify array
// const newArr= myArr3.slice().reverse()
// console.log(newArr)

let tmp=myArr3.length-1
for(let i=0;i<myArr3.length;i++){
console.log(myArr3[tmp])
tmp--;
}
