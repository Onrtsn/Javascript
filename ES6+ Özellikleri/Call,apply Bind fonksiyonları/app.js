const obj1={
    number1:10,
    number2:20
};
const obj2={
    number1:30,
    number2:40
};
    
function addNumbers(number3,number4){
        console.log(this.number1 + this.number2 + number3 + number4);
    }
    // addNumbers.call(obj1,100,200);
    // addNumbers.call(obj2,100,200);,
        // apply kullanımında array olarak kullanılmalıdır
    // addNumbers.apply(obj1,[40,50]);

    // Bind

    function getnumberstotal(number3,number4){
        return this.number1+this.number2+number3+number4;
    }
        const copyfunc=getnumberstotal.bind(obj1);
        const copyfunc2=getnumberstotal.bind(obj2);
           console.log(copyfunc(100,200));
           console.log(copyfunc2(100,200));

        // console.dir(copyfunc);
        // console.dir(copyfunc2);