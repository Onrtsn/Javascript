class UI{

    static addFilmtoUI(newFilm){
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

    static clearInput(elemnt1,elemnt2,elemnt3){
        elemnt1.value="";
        elemnt2.value="";
        elemnt3.value="";
    }

    static displayMessages(message,type){
        const cardBody=document.querySelector(".card-body");
        // alert divini oluşturma
        console.log(cardBody);
        const div=document.createElement("div");

        div.className=` alert alert-${type}`;
        div.textContent=message;

        cardBody.appendChild(div);
        setTimeout(function(){
            div.remove();
        },3000);
    }

    static loadAllFilms(films){
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
    static deletefilmFormUI(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI(){
        let filmList=document.querySelector("#films");
        // filmList.innerHTML=""; Birinci yöntem
        while(filmList.firstElementChild !==null){
            filmList.firstElementChild.remove();
        }
    }
}
