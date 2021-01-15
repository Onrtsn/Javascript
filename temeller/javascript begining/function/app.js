// function merhaba(name,age){
//     console.log('İsim: ${name} Yaş: $age');
// }
// merhaba("Onur",22); //Fonksiyon çağrısı

// function square(x){
//    return x*x; //     console.log(x*x);
//  }
// function cube(x){
//     return x*x*x;    // console.log(x*x*x);
// }
// let a=square(12);
// a=cube(a);
// console.log(a);
// (function(name){
//     console.log("merhaba: " + name);
// })("Onur");

const database={
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function () {
        console.log("Elde Edildi");
    },
    update:function(id) {
        console.log('Id: ${id} Güncellendi');
    },
    delete:function(id) {
        console.log('Id: ${id} Silindi');
    }
}

console.log(database.host);
database.add();
database.delete(10);