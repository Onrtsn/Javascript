
    // function Employee(name,age){
    //     this.name=name;
    //     this.age=age;
    //     this.shoeinfos=function(){
    //         console.log("biligiler Yükleniyor...");
    //     }
    //     this.toString=function(){
    //         console.log("Bu bir Employee objesidir...")
    //     }
    // }

    // const emp1=new Employee("Onur",25);
    // console.log(emp1);
    // console.log(emp1.toString());


    function Employee(name,age){
        this.name=name;
        this.age=age;
        // this.shoeinfos=function(){
        //     console.log("İsim: "+this.name,"Yaş: "+this.age);
        // }
    }
        Employee.prototype.showinfos=function(){
            console.log("İsim: "+this.name,"Yaş: "+this.age);
        }

    const emp1=new Employee("Onur",22);
    const emp2=new Employee("Tosun",21);
        emp2.showinfos();
        console.log(emp1);
        console.log(emp2);