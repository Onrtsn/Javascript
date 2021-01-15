let value;

const programmer={
    name:"Onur TOSUN",
    age:22,
    email:"onrtsn65@gmail.com",
    langs:["Javascript","PHP","C#"],
    
    address:{
        city:"Van",
        street:"Edremit"
    },

    work:function(){
        console.log("Programcı Çalışıyor...");
    }
}
value=programmer;
value=programmer.email;
value=programmer["email"];
 value=programmer.langs;

 value=programmer.address.city;

 programmer.work();

 const programmers=[
     {name:"Onur",age:25},
     {name:"Tosun",age:22}
 ]
 value=programmers[0].name;

 
console.log(value);
