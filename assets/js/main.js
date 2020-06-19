const parentElement = document.querySelector('.kataList');

//Loop to Create Kata Heading and Parapraph Elements
for (let katasIndex = 1; katasIndex <= 18; katasIndex++) {
    const kataHeadingContainer = document.createElement('div'); //Create DIV container
    kataHeadingContainer.setAttribute('class', 'katasContainer'); //Set Class for DIV containers
    const kataHeading = document.createElement('h3'); //Create H3 header element
    const kataResults = document.createElement('p'); //Create P element to dispaly results
    kataResults.setAttribute('id', 'kata'+katasIndex); //Add ID to each P element
    kataHeading.append('Kata ' + katasIndex); //Append Heading Names to H3 Element
    parentElement.append(kataHeadingContainer); //Append Heading DIV to parent Element
    kataHeadingContainer.append(kataHeading); //Append H3 element to DIV container
    kataHeadingContainer.append(kataResults); //Append results P element to DIV container
}

//Sample Array
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

//KATA 1
let arrayKata1 = [];
for (let indexKata1 = 1; indexKata1 <= 20; indexKata1++) {
    arrayKata1.push(' ' + indexKata1);
}
//Display Results
const kataElement1 = document.querySelector('#kata1');
kataElement1.append(arrayKata1)

//KATA 2
let arrayKata2 = [];
for (let indexKata2 = 2; indexKata2 <= 20; indexKata2+=2) {
    arrayKata2.push(' ' + indexKata2);
}
const kataElement2 = document.querySelector('#kata2');
kataElement2.append(arrayKata2)

//KATA 3
let arrayKata3 = [];
for (let indexKata3 = 1; indexKata3 <= 20; indexKata3+=2) {
    arrayKata3.push(' ' + indexKata3);
}
const kataElement3 = document.querySelector('#kata3');
kataElement3.append(arrayKata3)

//KATA 4
let arrayKata4 = [];
for (let indexKata4 = 5; indexKata4 <= 100; indexKata4+=5) {
    arrayKata4.push(' ' + indexKata4);
}
const kataElement4 = document.querySelector('#kata4');
kataElement4.append(arrayKata4)

//KATA 5
let arrayKata5 = [];
for (let indexKata5 = 1; indexKata5 <= 100; indexKata5++) {
    let squareRoot = Math.sqrt(indexKata5);
    if (squareRoot % 1 === 0) {
        arrayKata5.push(' ' + indexKata5);
    }
}
const kataElement5 = document.querySelector('#kata5');
kataElement5.append(arrayKata5)

//KATA 6
let arrayKata6 = [];
for (let indexKata6 = 20; indexKata6 >= 1; indexKata6--) {
    arrayKata6.push(' ' + indexKata6);
}
const kataElement6 = document.querySelector('#kata6');
kataElement6.append(arrayKata6)

//KATA 7
let arrayKata7 = [];
for (let indexKata7 = 20; indexKata7 >= 2; indexKata7-=2) {
    arrayKata7.push(' ' + indexKata7);
}
const kataElement7 = document.querySelector('#kata7');
kataElement7.append(arrayKata7)

//KATA 8
let arrayKata8 = [];
for (let indexKata8 = 19; indexKata8 >= 1; indexKata8-=2) {
    arrayKata8.push(' ' + indexKata8);
}
const kataElement8 = document.querySelector('#kata8');
kataElement8.append(arrayKata8)

//KATA 9
let arrayKata9 = [];
for (let indexKata9 = 100; indexKata9 >= 5; indexKata9-=5) {
    arrayKata9.push(' ' + indexKata9);
}
const kataElement9 = document.querySelector('#kata9');
kataElement9.append(arrayKata9)

//KATA 10
let arrayKata10 = [];
for (let indexKata10 = 100; indexKata10 >= 1; indexKata10--) {
    let squareRoot10 = Math.sqrt(indexKata10);
    if (squareRoot10 % 1 === 0) {
        arrayKata10.push(' ' + indexKata10);
    }
}
const kataElement10 = document.querySelector('#kata10');
kataElement10.append(arrayKata10)

//KATA 11
let arrayKata11 = [];
for (let indexKata11 = 0; indexKata11 < sampleArray.length; indexKata11++) {
    arrayKata11.push(' ' + sampleArray[indexKata11]); //Add space to numbers
}
const kataElement11 = document.querySelector('#kata11');
kataElement11.append(arrayKata11)

//KATA 12
let arrayKata12 = [];
for (let indexKata12 = 0; indexKata12 < sampleArray.length; indexKata12++) {
    const currentValue = sampleArray[indexKata12];
    if (currentValue % 2 === 0) {
        arrayKata12.push(' ' + currentValue);
    }
}
const kataElement12 = document.querySelector('#kata12');
kataElement12.append(arrayKata12)

//KATA 13
let arrayKata13 = [];
for (let indexKata13 = 0; indexKata13 < sampleArray.length; indexKata13++) {
    const currentValue = sampleArray[indexKata13];
    if (currentValue % 2 !== 0) {
        arrayKata13.push(' ' + currentValue);
    }
}
const kataElement13 = document.querySelector('#kata13');
kataElement13.append(arrayKata13)

//KATA 14
let arrayKata14 = [];
for (let indexKata14 = 0; indexKata14 < sampleArray.length; indexKata14++) {
    let square = sampleArray[indexKata14] * sampleArray[indexKata14];
    arrayKata14.push(' ' + square);
}
const kataElement14 = document.querySelector('#kata14');
kataElement14.append(arrayKata14)

//KATA 15
let sumKata15 = 0;
for (let indexKata15 = 1; indexKata15 <= 20; indexKata15++) {
    sumKata15 += indexKata15;
}
const kataElement15 = document.querySelector('#kata15');
kataElement15.append(sumKata15)

//KATA 16
let sumKata16 = 0;
for (let indexKata16 = 0; indexKata16 < sampleArray.length; indexKata16++) {
    sumKata16 += sampleArray[indexKata16];
}
const kataElement16 = document.querySelector('#kata16');
kataElement16.append(sumKata16)

//KATA 17
let smallestElement = sampleArray[0];
for (let indexKata17 = 0; indexKata17 < sampleArray.length; indexKata17++) {
    if (sampleArray[indexKata17] < smallestElement) {
        smallestElement = sampleArray[indexKata17];
    }
}
const kataElement17 = document.querySelector('#kata17');
kataElement17.append(smallestElement)

//KATA 18
let largestElement = sampleArray[0];
for (let indexKata18 = 0; indexKata18 < sampleArray.length; indexKata18++) {
    if (sampleArray[indexKata18] > largestElement) {
        largestElement = sampleArray[indexKata18];
    }
}
const kataElement18 = document.querySelector('#kata18');
kataElement18.append(largestElement)

/* 
Credits
========
Completed with help from Rosemarie Garcia and Terry Hanratta 
*/
