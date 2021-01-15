
    // Kalıtım-Inherit
    function Person(name,age){
        this.name=name;
        this.age=age;
    }
        Person.prototype.infoshow = function(){
            console.log("isim: " + this.name + "Yaş: " + this.age);
        }
        // const person=new Person("Onur",22);
        // console.log(person);

    function Employee(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
        Employee.prototype=Object.create(Person.prototype);
        const emp=new Employee("Onur",22,1500);
        // console.log(emp);
        emp.infoshow();