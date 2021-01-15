const person={
    name:"Onur Tosun",
    age:22,
    salary:1500
};
const langs=["Javascript","Python","Php"];
const name="Onur Tosun";

// For İn
// Obje üzerinde gezinme işlemi
// for(let per in person){
//     console.log(per,person[per]);
// }
// Dİzi üzerinde gezinme
// for(let index in langs){
//     console.log(index,langs[index]);
// }
// String üzerinde gezinme

// for(let index in name){
//     console.log(index,name[index]);
// }

// For of döngüsü

// for(let value of langs){
//     console.log(value);
// }

// String of gezinme

for(let charecter of name){
    console.log(charecter);
}