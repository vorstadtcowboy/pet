const zahlen = [1, 6, 8, 9, 10, 100, 23, 0];

//Gib mal alle Zahlen in der Console Auslauf

//Schleife for, foreach, while, for... in, for ... of, do...while

//zahlen.forEach((zahl) => console.log(zahl));

/*for (let index = 0; index < zahlen.length; index++) {
  console.log(zahlen[index]);
}*/

//Map gibt einen neuen Array zurück;
const square = zahlen.map((zahl) => zahl * zahl);
//square.forEach((zahl) => console.log(zahl));

//Filter läuft über den Array und wendet Filterbedingung an und gibt ein neues Array zurück
const zahlenUnterZehn = zahlen.filter((zahl) => zahl < 10);

//Reduce
const reduce = zahlen.reduce((total, zahl) => total + zahl);

console.log(reduce);
