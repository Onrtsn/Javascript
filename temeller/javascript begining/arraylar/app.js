// let value;

// const numbers=[43,56,33,23,56,96];

// // const numbers2= new Array(1,2,3,41,5);

// const langs=["python","Java","c++"];

// const a=["Merhaba",22,null,undefined,3.14];
// // uzunluk
// value=numbers.length;
// // indexleme
// value=numbers[0];
// value=numbers[2];
// value=numbers[6];
// value=numbers[numbers.length -1];

// // herhangi bir indexi değeri değiştirme
// numbers[2]=1000;
// value=numbers;
// // index off
// value=numbers.indexOf(1000);
// // arrayin sonuna değer ekleme -push
// numbers.push(2000);
// //  başına ekleme
// value=numbers;
// numbers.unshift(3000);
// // sonundan değer atma 

// numbers.pop();
// value=numbers; 
// // başından değer atma
// numbers.shift();
// value=numbers;
// //  belirlenen aralıkta değer çıkarma 
// numbers.splice(0,3);
// value=numbers;
// // reverse
// numbers.reverse();
// value=numbers;
// //  dğerleri sıralama
// value=numbers.sort();
// value=numbers.sort(function(x,y){
//     // küçükten büyüğe 
//     return x-y;
// });
// value=numbers.sort(function(x,y){
//     // büyükten küçüğe 
//     return y-x;
// });

// console.log(value);

function findLineCollication(x1, y1, x2, y2, x3, y3, x4, y4){
    var a1 = y2-y1;
    var b1 = x1-x2;
    var c1 = a1*x1 + b1*y1;
    var a2 = y4-y3;
    var b2 = x3-x4;
    var c2 = a2*x3 + b2*y3;
    var det = a1*b2-a2*b1;
    if(det != 0){
       var x = (b2*c1 - b1*c2)/det;
       var y = (a1*c2 - a2*c1)/det;
       if(x >= Math.min(x1, x2) && x <= Math.max(x1, x2) 
          && x >= Math.min(x3, x4) && x <= Math.max(x3, x4)
          && y >= Math.min(y1, y2) && y <= Math.max(y1, y2) 
          && y >= Math.min(y3, y4) && y <= Math.max(y3, y4)){     
          writeSVG(x, y);
          return "x:" + x + " <br /> y: " + y;
       }   
    }
    return "No collication";
}
function writeSVG(x, y){
    document.getElementById("lines").innerHTML += "<circle cx=\""+x+"\" cy=\""+y+"\" r=\"5\" fill=\"green\" />";  
    document.getElementById("lines").innerHTML += "<text x=\"" + (x1-10) + "\" y=\"" + (y1-10) + "\" fill=\"red\">x1, y1</text>";
    document.getElementById("lines").innerHTML += "<text x=\"" + (x2-10) + "\" y=\"" + (y2+20) + "\" fill=\"red\">x2, y2</text>";
    document.getElementById("lines").innerHTML += "<text x=\"" + (x3-10) + "\" y=\"" + (y3+20) + "\" fill=\"black\">x3, y3</text>";
    document.getElementById("lines").innerHTML += "<text x=\"" + (x4-10) + "\" y=\"" + (y4-10) + "\" fill=\"black\">x4, y4</text>";
    document.getElementById("lines").innerHTML += "<text x=\"" + (x+15) + "\" y=\"" + (y+10) + "\" fill=\"green\">x, y</text>";
    
    document.getElementById("lines").innerHTML += "<circle cx=\"" + x1 + "\" cy=\"" + y1 + "\" r=\"5\" fill=\"red\" />";
    document.getElementById("lines").innerHTML += "<circle cx=\"" + x2 + "\" cy=\"" + y2 + "\" r=\"5\" fill=\"red\" />";
    document.getElementById("lines").innerHTML += "<circle cx=\"" + x3 + "\" cy=\"" + y3 + "\" r=\"5\" fill=\"black\" />";
    document.getElementById("lines").innerHTML += "<circle cx=\"" + x4 + "\" cy=\"" + y4 + "\" r=\"5\" fill=\"black\" />";
    }
    
    
    var x1 = document.getElementById("Line1").x1.baseVal.value;
    var y1 = document.getElementById("Line1").y1.baseVal.value;
    var x2 = document.getElementById("Line1").x2.baseVal.value;
    var y2 = document.getElementById("Line1").y2.baseVal.value;
    var x3 = document.getElementById("Line2").x1.baseVal.value;
    var y3 = document.getElementById("Line2").y1.baseVal.value;
    var x4 = document.getElementById("Line2").x2.baseVal.value;
    var y4 = document.getElementById("Line2").y2.baseVal.value;
    var sonuc = findLineCollication(x1, y1, x2, y2, x3, y3, x4, y4);
    
    document.getElementById("sonuc").innerHTML += sonuc;