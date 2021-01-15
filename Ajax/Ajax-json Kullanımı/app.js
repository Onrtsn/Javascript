document.getElementById("ajax").addEventListener("click",getallEmployees);

    function getallEmployees(){
        const xhr=new XMLHttpRequest();

        xhr.onload=function(){

            let list=document.getElementById("employees");

            if(this.status==200){
            const employees=JSON.parse(this.responseText);
            employees.forEach(function(employee){
                list.innerHTML+=`
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `
            })
            }
        }

        xhr.open("GET","employees.json",true);

        xhr.send();
}