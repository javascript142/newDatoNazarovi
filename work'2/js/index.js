// array examples

let arrayOfNumber = [1, 2, 3, 4, 5]
// alert (arrayOfNumber);

let mixedArrey = [1, "two", 3.4, "four"];
 mixedArrey.push("six");
// alert(mixedArrey[4]);
// alert(mixedArrey)

 mixedArrey.pop();
// alert(mixedArrey);

let Fluits = ["apple", "orange","banana","mango","black",];
// Fluits.shift()
// Fluits.shift()
// Fluits.shift()// აცილებს პირველს 
// alert(Fluits);

// Fluits.unshift("apple", "orange", "banana", "mango");//amateb 
// alert(Fluits);'
// alert(Fluits.length);//ganaxebs ramdeni weria
// Fluits.splice(0,0, "green");

// Fluits.splice(Fluits.length/2,1 )
// alert(Fluits);

// let sliseFruits = Fluits.slice(0,3);
// alert(sliseFruits);

// =====================Objects js======================\\

let person = {
    eye:"too see",
    nouse:"too smell",
    mouths:["too eat", "to speak"],
    ears:"to hear", 
}
// alert(person.eye + ',' +person.mouths);
// alert(person.mouths);

person.hands = "too touch"
// alert(person.hands);
delete person.nouse;

// alert(person.nose);

//===============js type conversions =================\\

let num1 = 10;
let num2 = 20;
// alert( num1.toString() + ' ' + num2.toString());

let num3 = "2"
let num4 = "3"
// alert(parseInt(num3) + ' ' + parseInt(num4));

let num5 = 2;
let num6 = 3;
alert(String(num5) + ' ' + String(num6));