//Feladat 1
//Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt! (Input ellenőrzést nem kell végezni.)
//A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével!
console.log('Feladat1');

const numericArray1 = [11,22,33,44,55]

const productArray = numericArray1.map(item => item*1.27);
console.log(productArray);

const sumOfArray = productArray.reduce((previousValue,curentValue)=> previousValue+curentValue)
console.log(sumOfArray);

//egyben a kettő:
const sumOfArray2= numericArray1
.map(item => item*1.27)
.reduce((previousValue, curentValue)=> previousValue+curentValue);
console.log(sumOfArray2);

// 2. Feladat
// Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt,
// és egy tetszőleges primitív értéket.! A függvény visszatérési értéke egy objektum, ami a következő 
//propertyket tartalmazza:
// •	exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték 
//              megtalálható e a tömbben
// •	index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, 
//             akkor a tömbben lévő indexe, ha nem akkor -1 legyen az értéke
// •	allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
// •	someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem
console.log('Feladat2');

const numericArray2=[123,'hello',true,0,NaN,5234];
const prim='hello';

const exists=numericArray2.some(item=>item===prim);
console.log(exists);

const index= numericArray2.findIndex(item=> item===prim);
console.log(index);

const allElementIsANumber= numericArray2.every(item=>typeof(item)==='number');
console.log(allElementIsANumber);

const someElementIsANumber= numericArray2.some(item=>typeof(item)==='number');
console.log(someElementIsANumber);

// 3. Feladat
// Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap  
//(Input ellenőrzést nem kell végezni.), és visszaad egy html template-et (string)! 
//A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.
// Pl.:
// // ha ez a tömb
// const content = ['első', 'második', 'harmadik'];

// // akkor ez legyen a visszatérési érték:
// <ul>
//     <li>első</li>
//     <li>második</li>
//     <li>harmadik</li>
// </ul>


console.log('Feladat3');

const stringArray=['hello','bello','szia','mia'];

function stringToTemplate (array){
    let template = '<ul>\n';
    array.forEach(function(item){template+='\t<li>'+item+'<\li>\n'});
    template += '<ul>\n';
    return template;
}
console.log(stringToTemplate(stringArray));

// //vagy másik megoldásként:
// const template = ('<ul>\n');
// const stringArrayToTemplate= stringArray.forEach(item => console.log(template+='\t<li>'+item+'<\li>\n'));
// console.log(stringArrayToTemplate);
