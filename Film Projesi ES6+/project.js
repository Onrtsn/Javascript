const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBodys=document.querySelectorAll(".card-body");
const FilmDeleteButton = document.querySelector("#films");
const clear=document.getElementById("clear-films");




let films=Storage.getFilmFormStoroge();
UI.loadAllFilms(films);



// tüm eventleri yükleme
eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMcontentLoaded",function(){
        let films=Storage.getFilmFromStorage();
        // console.log(films);
        UI.loadAllFilms(films);
    })
    //cardBodys.addEventListener("click",deletefilm);
    FilmDeleteButton.addEventListener("click",deletefilm);
    clear.addEventListener("click",clearAllFilms);
}


function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    if(title==="" || director==="" || url===""){
        // hata mesajı
        UI.displayMessages("Tüm Alanları Doldurunuz...","danger");
    }
    else{
        // Yeni film 
        const newFilm=new Film(title,director,url);
        UI.displayMessages("Film Başarıyla Eklendi...","success")
        UI.addFilmtoUI(newFilm); //Arayüze film ekleme
        Storage.addFilmtoStoroge(newFilm); //Storoge film gönderme
    }


    UI.clearInput(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deletefilm(e){
    UI.deletefilmFormUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    UI.displayMessages("Film Silinmiştir...","success");
}
function clearAllFilms(){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}