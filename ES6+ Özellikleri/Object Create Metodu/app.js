// const obj ={
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
//     // const emp= Object.create(obj);
//     // emp.name="Onur";
//     // emp.age=22;
//     // console.log(emp);
    function person(){

    }
    person.prototype.test1=function(){
        console.log("Test 1");
    }
    person.prototype.test2=function(){
        console.log("Test 2");
    }
    function Employee(name,age){
        this.name=name;
        this.age=age;
    }
    Employee.prototype=Object.create(person.prototype);
    Employee.prototype.Mytest=function(){
        console.log("My Test");
    }
    const emp= new Employee("Onur",22);
    console.log(emp);