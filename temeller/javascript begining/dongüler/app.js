// while döngüleri

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i=10;
// while(i>0){
//     console.log(i);
//     // i-=1;
//     i-=2;
//     //  i--;
// }

//  Break and continue
// let i=0;

// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

// let i=0;
// while(i<10){
//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Do while

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10)

// for

// const langs=["python","javascript","php"];
// // let i=0;
// // while(i<langs.length){
// //     console.log(langs[i]);
// //     i++;
    
// // }

// // for(i=0;i<langs.length;i++)
// // console.log(langs[i]);

// langs.forEach(function(lang,i){
//     console.log(lang,i);
// })

const users=[
    {name:"Onur",age:22},
    {name:"eylül",age:20},
    {name:"nur",age:20}
];

const names=users.map(function(user){
    return user.name;
});
console.log(names);
const ages=users.map(function(user){
    return user.age;
});
console.log(ages);