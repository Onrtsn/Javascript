// Setler oluşurma

const myset= new Set();

myset.add(100);
myset.add(100);
myset.add(300);
myset.add(3.14);
myset.add("Onur");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:10,b:20});
// Aynısı Kısa Yolu
    const myset2 =new Set([100,200,"Onur",[1,2,3]]);
// console.log(myset);
// console.log(myset2);

// Size metodu
    // console.log(myset.size);

// Delete metodu
    // myset.delete("Onur");

// Has Metodu (var mı )
    // myset.has("Onur");
    // myset.has(2000);

// FOreach ile gezinme
    // myset.forEach(function(value){
    //     console.log(value);
    // })

// For of Döngüsü
    // for(let value of myset){
    //     console.log(value);
    // }

        // Setlerden array oluşturma

                const array= Array.from(myset);
                    console.log(array);


