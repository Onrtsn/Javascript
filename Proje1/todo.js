// Tüm elemntleri seçme 
const form=document.querySelector("#todo-form");
const todoinput=document.querySelector("#todo");
const todolist=document.querySelector(".list-group");
const firstcardbody=document.querySelector(".card-body")[0];
const secondcardbody=document.querySelector(".card-body")[1];
const filter=document.querySelector("#filter");
const clearbutton=document.querySelector("#claer-todos");
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const newTodo=todoinput.value.trim();
    if(newTodo === ""){
        /* <div class="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                    </div>*/
        showAlert("danger","Lütfen bir todo giriniz");
    }else {
        addTodotoId(newTodo);
        // addstroge0
        showAlert("succes","Todo başarıyla eklendi");
    }
    // addTodotoId(newTodo);    //string değerini list item olarak yuvaya eklyecek 
    
    e.preventDefault();


}

function showAlert(type,message){
    let alert=document.createElement("div");
    let firstcardbody=document.querySelector(".card-body");
    console.log("şlkdsjfa " ,document.querySelector(".card-body"));
    alert.className= `alert alert-${type}`; 
    alert.textContent=message;
    firstcardbody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1000)         
}

function addTodotoId(newTodo){
        // list item oluşturma
        const listitem=document.createElement("li");
        // link oluşturma
        const link=document.createElement("a");
        link.href="#";
        link.className="delete-item";
        link.innerHTML="<i class = fa fa-remove></i>";
        
        listitem.className="list-group-item d-flex justify-content-between";

        // text not ekleme
        listitem.appendChild(document.createTextNode(newTodo));
        listitem.appendChild(link);

        // todo liste list itemi ekleme
        todolist.appendChild(listitem);
        todoinput.value="";
}