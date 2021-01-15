// Statik  Metodlar
    // Obje oluşturmadan fonksiyon kullanma 

    class matematik{
        sqrt(x){
            console.log(x*x);
        }
         static cube(x){ //static 
            console.log(x*x*x);
        }
    }
    matematik.cube(4); //Static olan Hali 
    // ------------------
    const math=new matematik(); // prototipte  fonksiyon olarak görülür
    console.log(math);
    math.sqrt(5);