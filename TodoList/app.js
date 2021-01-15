// // elementi ID göre alma
// let element;

// element=document.getElementById("todo-form");
// element=document.getElementById("task-title");

// // Element claasa göre seçme
// element=document.getElementsByClassName("list-group-item")[0];
// element=document.getElementsByClassName("card-header");

// // element taga göre seçme

// element=document.getElementsByTagName("div");

// // Query selector--css selector-tek bir element

// element=document.querySelector("#todo-form");
// element=document.querySelector("#task-title");

// element=document.querySelector(".list-group-item");
// element=document.querySelector("li");
// element=document.querySelector("div");

// //  quary selectorall-Tüm elemnetler
// element=document.querySelectorAll(".list-group-item");
// element.forEach(function(el){
//     console.log(el);
// });
// // console.log(element);

//---Elementleri Seçme ve style özelliklerini değiştirme

// const element=document.querySelector("#clear-todos");

// element özellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// style ve element özlelikleirini değiştirme

// element.className="btn btn-primary";
// element.style.color="black";
// element.style.marginleft="20px";
// element.href="https://www.google.com.tr";
// element.target="_blank";

// console.log(element.textContent);
// element.textContent="Silin";
// element.innerHTML="<span style='color:red'>Silin</span>"

// const elements=document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color="yellow";
//     el.style.background="yellow";
// });

// let element2 =document.querySelectorAll("li:first-child");
// element2=document.querySelectorAll("li:nth-child(2)");
// element2=document.querySelectorAll("li:nth-child(odd)");
// element2=document.querySelectorAll("li:nth-child(even)");

// element2.forEach(function(el){
//     el.style.background="green";
//     el.style.color="white";
// });


// console.log(element2);
// // console.log(element);

// Domlar Üzerinde Gezinme

// let value;
// const todolist=document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2)");
// const cardrow=document.querySelector(".card.row");


// value=todolist;
// value=todo;
// value=cardrow;

// // child nodes-text dahil alır

// value=todolist.childNodes;
// value=todolist.childNodes[0];

// // children-element

// value=todolist.children;
// value=todolist.children[0];
// value=todolist.children[todolist.children.length -1];
// value=todolist.children[2].textContent="Değişti";

// value=cardrow;
// value=cardrow.children;
// value=cardrow.children[2].children[1].textContent="Buraıda değişti";

// value=todolist;
// value=todolist.firstElementChild;
// value=todolist.lastElementChild;
// value=todolist.children.length;

// value=cardrow;
// value=cardrow.parentElement;
// value=cardrow.parentElement.parentElement;

// // element kardeşleri

// value=todo;
// value=todo.previousElementSibling;
// value=todo.nextElementSibling;
// value=todo.nextElementSibling.nextElementSibling;
// value=todo.previousElementSibling.previousElementSibling;



// console.log(value);

// Dinamik element oluşturma

// --yeni element oluşturma
// const newlink=document.createElement("a");
// const cardbody=document.getElementsByClassName("card-body")[1];

// newlink.id="clear-todos";
// newlink.className="btn btn-danger";
// newlink.href="https://google.com.tr";
// newlink.target="_blank";

// // Text content
// // cardbody.textContent="sdada";

// // const text=document.createTextNode("ne haber");
// // cardbody.appendChild(text);
// // console.log(cardbody);
//  newlink.appendChild(document.createTextNode("Farklı sayfaya git "));

// cardbody.appendChild(newlink);


// console.log(newlink);

// Dinamik element silme

// const tolist=document.querySelector("ul.list-group");

// const todos=document.querySelectorAll("li.list-group-item");

// // Remove Metodu

// // todos[1].remove();

// // Reomve child

// // tolist.removeChild(tolist.lastElementChild);

// tolist.removeChild(todos[0]);


// console.log(todos);
// console.log(tolist);

// REPLACE ---Elementleri değiştirme

// const cardbody=document.querySelectorAll(".card-body")[1];
// const newElement=document.createElement("h3");

// newElement.className="card-title";
// newElement.id="tasks-title";
// newElement.textContent="Yeni Todolar";
// // Eski Element

// const oldelement=document.querySelector("#tasks-title");
// cardbody.replaceChild(newElement,oldelement);



// console.log(newElement);


// ------Dinamik Attribute

// const todoinput=document.getElementById("todo");
// let element;

// element=todoinput;
// element=todoinput.classList;
// // todoinput.className="form-control newclass";
// // todoinput.classList.add("newclass");
// // todoinput.classList.add("newclass2");
// // todoinput.classList.remove("form-control");
// element=todoinput;
// element=todoinput.placeholder;
// element=todoinput.getAttribute("placeholder");
// todoinput.setAttribute("placeholder","Ne haber");
// element=todoinput;
// todoinput.setAttribute("title","Input");
// todoinput.removeAttribute("name");
// element=todoinput.hasAttribute("name");



// console.log(element);

// --------------------------
// Eventler Derssssssssssssssssssssiiii

// const filterinput=document.getElementById("filter");
// const todoform=document.getElementById("todo-form");
// todoform.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("submit eventi");
    
// }

// filterinput.onfocus=function(){
//     console.log("Ne Haber");

// }-----eski yöntemdir

// filterinput.addEventListener("focus",function(event){
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.target.placeholder);
//     console.log(event.target.className);


//     // console.log("ne Haber");
// });


// Klavye Eventleri

// const header=document.querySelector(".card-header");
// const todoinput=document.querySelector("#todo");

// todoinput.addEventListener("keyup",changeText);

// function changeText(e){
//     header.textContent=e.target.value;
//     console.log(e.target.value);
// }


// ----keypress
// document.addEventListener("keypress",run);

// function run(e){
//     console.log("ne haber");
//     // console.log(e.which);
//     console.log(e.key);
// }

// ----keydown


// document.addEventListener("keydown",run);

//  function run(e){
// //    console.log("ne haber");
//    console.log(e.which);
//    console.log(e.key);
//  }

// ----keyup

// document.addEventListener("keyup",run);

//  function run(e){
// //    console.log("ne haber");
//    console.log(e.which);
//    console.log(e.key);
//  }

// -------------Fare Eventleri
// const cardbody=document.querySelectorAll(".card-body")[1];
// const title=document.querySelector("#tasks-title");

// click eventi  

// title.addEventListener("click",run);

// function run(e){
//     console.log(e.type);
// }

// Mouse Down 
// Mouse over
// Mouse up
// Mouse out
// Mouse enter ve mouse leave


// title.addEventListener("mouseenter",run);
// title.addEventListener("mouseleave",run);
// function run(e){
//     console.log(e.type);
// }

// İnput eventleri-----------------

// const filter=document.getElementById("filter");
// // (syfa yenileme)
// // document.addEventListener("DOMContentLoaded",load);


// // function load(e){
// //     console.log("sayfa yüklendi");
// // }

// // focus eventi
// // filter.addEventListener("focus",run);
// // bluer eventi (odaktan çıkma)
// // filter.addEventListener("blur",run);

// // Paste eventi
// // filter.addEventListener("paste",run);
// // Copy eventi
// // filter.addEventListener("copy",run);
// // select eventi
// filter.addEventListener("select",run);

// function run(e){
//     console.log(e.type);
// }

// -----------Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");
// })
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// })
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// })

// -----------Event Capturing veya Delagation

const cardbody=document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    if(e.target.className==="fa fa-remove"){
        console.log("silme işlemi");
    }else if(e.target.id==="filter"){
        console.log("filtreleme işlemi");
    }else if(e.target.id==="clear-todos"){
        console.log(" task temizleme işlemi");
    }
    // console.log("ne haber");
}


