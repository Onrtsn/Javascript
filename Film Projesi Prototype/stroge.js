function Storage(){

};
Storage.prototype.addFilmtoStoroge=function(newFilm){
    let films=this.getFilmFormStoroge();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getFilmFormStoroge=function(){
    let films;

    if(localStorage.getItem("films")===null){
        films=[];
    }else{
        films=JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage=function(filmTitle){
    let films=this.getFilmFormStoroge();

    films.forEach(function(film,index){
        if(film.title==filmTitle){
            films.splice(index,1);
        }
    })
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage=function(){
    localStorage.removeItem("films");
}