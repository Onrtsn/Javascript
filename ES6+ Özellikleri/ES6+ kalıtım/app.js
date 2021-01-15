    // Eski Hali 
    // function Person(name,age){
    //     this.name=name;
    //     this.age=age;
    // }
    //     Person.prototype.infoshow = function(){
    //         console.log("isim: " + this.name + "Yaş: " + this.age);
    //     }
    // function Employee(name,age,salary){
    //     Person.call(this,name,age);
    //     this.salary=salary;
    // }
    //     Employee.prototype=Object.create(Person.prototype);
    //     Employee.prototype.toString=function(){
    //         console.log("Employee");
    //     }
    //     Employee.prototype.infoshow=function(){
    //         console.log("isim: " + this.name + "Yaş: " + this.age+"Maaş: "+this.salary);
    //     }
    //     const emp=new Employee("Onur",22,1500);

                    // Yeni ES6+ Hali       Extends=obje Birleşirme  *****  super=fonksiyonuyla obje ozellikleri

    class Person {//SuperClass-BaseClass
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        shofInfo(){
            console.log("isim: " + this.name + "Yaş: " + this.age);
        }
    }
    class Employee extends Person {//DerivedClaas-SubClass-ChildClass
        constructor(name,age,salary){
            // this.name=name;
            // this.age=age;    //Bunların yerine super fonksiyonunu kullanarak persondan birleştirme yapılabilir
            super(name,age);
            this.salary=salary;
        }
        shofInfo(){
            console.log("isim: " + this.name + "Yaş: " + this.age);
        }
        toString(){
            console.log("Employee");
        }
        raisesalary(amount){
            this.salary+= amount;
        }
    }
    const emp=new Employee("Onur",22,1500);
    emp.raisesalary(500);
    emp.shofInfo();
    emp.toString();