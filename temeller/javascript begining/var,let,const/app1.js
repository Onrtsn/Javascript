

var sayilar = new Array();
 
for (var i = 0; i < etiketler.length; i++) {  //etiketler etiketlerin oldugu dizi.. kendiniz oluşturabilirsiniz ya da etiketler veri tabanından geliyosa  var etiketler=$(".etiketclassi"); şeklinde alabilirsiniz.
    var randomnumber = Math.floor(Math.random() * 11); //0ile10 arası rakam
     
    if (sayilar.indexOf(randomnumber)==-1) { // dizideki indexine bakıyorum -1 ise yani yoksa 
     
        sayilar.push(randomnumber);// diziye ekliyorum
    }
    else { //varsa i'yi 1 düşürüp başa döndüp yine rakam üretiyorum.. böylece aynı rakam gelse bile başa dönüp yine rakam üretecek!
        i--;
    }

}



// array ("1", "2", "3","4","5","6","7","8","9"); // 9 değerli dizi oluşturuyoruz
//     var can = array[Math.floor(Math.random() * dizi.length)]; // değişkene dizi uzunluğunda rasgele değer seçtiriyoruz
//     console.log(dizi);  // ekrana yazdırıyoruz