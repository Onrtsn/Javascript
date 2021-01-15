const add=document.querySelector("#add");
const dell=document.querySelector("#dell");
const clear=document.querySelector("#clear");

const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
dell.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
};
function deleteItem(e){
    sessionStorage.removeItem(deleteItem.value);
};
function clearItem(e){
    sessionStorage.clear(clearItem.value);
};