const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBodys=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");



// UI Objesini Başlatma

const ui=new UI();

// Storage Objesi üretme
const localStorages=new Storage();

let films=localStorages.getFilmFormStoroge();
ui.loadAllFilms(films);



// tüm eventleri yükleme
eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMcontentLoaded",function(){
        let films=localStorages.getFilmFromStorage();
        // console.log(films);
        ui.loadAllFilms(films);
    })
    cardBodys.addEventListener("click",deletefilm);
    clear.addEventListener("click",clearAllFilms);
}


function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    if(title==="" || director==="" || url===""){
        // hata mesajı
        ui.displayMessages("Tüm Alanları Doldurunuz...","danger");
    }
    else{
        // Yeni film 
        const newFilm=new Film(title,director,url);
        ui.displayMessages("Film Başarıyla Eklendi...","success")
        ui.addFilmtoUI(newFilm); //Arayüze film ekleme
        localStorages.addFilmtoStoroge(newFilm); //Storoge film gönderme
    }


    ui.clearInput(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deletefilm(e){
    ui.deletefilmFormUI(e.target);
    localStorages.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    ui.displayMessages("Film Silinmiştir...","success");
}
function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    localStorages.clearAllFilmsFromStorage();

    
}