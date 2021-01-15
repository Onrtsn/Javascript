// Syntatic Sugar
    // Eski Yöntem
        // function Employee(name,age,salary){
        //     this.name=name;
        //     this.age=age;
        //     this.salary=salary;
        // }
        // Employee.prototype.infoShow= function(){
        //     console.log("İsim: "+this.name+"yaş: "+this.age+"Maaş: "+this.salary);
        // }
        // const emp=new Employee("onur",22,1500);
        // console.log(emp);

        // Yeni ES6+ sınıfına Göre Oluşturma

class Employee {

    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    shofİnfos(){
        console.log("İsim: "+this.name+"yaş: "+this.age+"Maaş: "+this.salary);
    }
}

    const emp=new Employee("Onur",22,1500);
    // console.log(emp);
    emp.shofİnfos();