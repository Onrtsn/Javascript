// let number1,number2;

// arr=[100,200,300,400];
// // number1=[100];
// // number2=[200];
// // Destructing
// [number1,number2]=arr;
// console.log(number1,number2);

// Object destrucing
// const numbers={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// // const {a:number1,c:number2,e:number3}=numbers;
// const {a,c,e}=numbers;
// // console.log(number1,number2,number3);
// console.log(a,c,e);

// const getlangs= ()=> ["Python","Javascript","C++"]
//     const [lang1,lang2,lang3]=getlangs();
//     console.log(lang1,lang2,lang3);

// Obje

const person={
    name:"Onur Tosun",
    year:1998,
    salary:1500,
    showinfo: ()=>{console.log("Bilgiler gösteriliyor...")}
}
const {name:isim,year:yil,salary:maas,showinfo:bilgilergöster}=person;
console.log(isim,yil,maas);
bilgilergöster();