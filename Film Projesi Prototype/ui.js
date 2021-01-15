function UI(){

};

UI.prototype.addFilmtoUI= function (newFilm){
 /*<!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->*/

    const filmlist=document.getElementById("films");
    filmlist.innerHTML +=`
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;
}

UI.prototype.clearInput=function(elemnt1,elemnt2,elemnt3){
    elemnt1.value="";
    elemnt2.value="";
    elemnt3.value="";
}

UI.prototype.displayMessages=function(message,type){
    const cardBody=document.querySelector(".card-body");
    // alert divini oluşturma

    const div=document.createElement("div");

    div.className=` alert alert-${type}`;
    div.textContent=message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },3000);
}

UI.prototype.loadAllFilms=function(films){
    console.log("isldk",films);
    const filmList =document.getElementById("films");

    films.forEach(function (film) {
        filmList.innerHTML+=`
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>   `
    });
}
UI.prototype.deletefilmFormUI=function(element){
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI = function(){
    const filmlist=document.getElementById("films");
    // filmList.innerHTML=""; Birinci yöntem
    while(filmList.firstElementChild !==null){
        filmList.firstElementChild.remove();
    }
}