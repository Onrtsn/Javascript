
    // function Employee(){
    //     this.name="Onur";
    // }

    // const emp1=new Employee();
    // const emp2=new Employee();

    //     console.log(emp1);
    //     console.log(emp2);

        function Employee(name,age,salary){
            this.name=name;
            this.age=age;
            this.salary=salary;

             this.showinfo = function(){
                console.log(this.name,this.age,this.salary);
            }
        }

        const emp1=new Employee("Onur",22,1500);
        // console.log(emp1);

        emp1.showinfo();