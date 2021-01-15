// Mapler - key(anahtar) -value(değer)
// let mymap=new Map(); //oluşturma

// console.log(mymap);
//  const key1="Onur";
//  const key2={a:10,b:20};
//  const key3= () => 2;

//  Set işlemi

    // mymap.set(key1,"String değer");
    // mymap.set(key2,"Object Literal değer");
    // mymap.set(key3,"Function değer");

// Get işlemi

    // console.log(mymap.get(key1));
    // console.log(mymap.get(key2));
    // console.log(mymap.get(key3));

// console.log(mymap);

// Map Boyutu 
    // console.log(mymap.size);

// const cities =new Map();
//     cities.set("Van",2);
//     cities.set("Ankara",5);
//     cities.set("İstanbul",15);

// For Each
    // cities.forEach(function(value,key){
    //     console.log(value,key);
    // })

// For Of
// for(let [key,value] of cities){
//     console.log(key,value);
// }

// Maps Anahtarlar şehir

    // for(let key of cities.keys()){
    //     console.log(key);
    // }

// Maps değerler Sayı

    // for(let value of cities.values()){
    //     console.log(value);
    // }

    // arrayden mapse değer gönderme

    // const arry=[["key1","value1"],["key2","value2"]];

    // const newmap=new Map(arry);

    // console.log(newmap);

// Maplerden array oluşturma
    const cities =new Map();
    cities.set("Van",2);
    cities.set("Ankara",5);
    cities.set("İstanbul",15);
        const array= Array.from(cities);
        // Oluşan array [["Van",2],["Ankara",5],["İstanbul",15]]
            console.log(array);