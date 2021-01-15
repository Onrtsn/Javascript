let value;

const now=new Date(); // Şu anki zaman

const date1=new Date("9-11-1993 06:09:00");

const date2=new Date("July 7 1998 11:20:21");

const date3=new Date("7/7/1998");
//  tarih ve saat getirme
value=date1;
value=date3.getMonth();
value=date1.getDate();
value=date3.getDay();

value=date2.getHours();
value=date2.getSeconds();
value=date1.getMinutes();

//  Tarih ve saat düzeltme
date2.setMonth(8);
date2.setDate(15);
date2.setFullYear(1999);
date2.setHours(0);
date2.setMinutes(12);

value=date2;
console.log(value);