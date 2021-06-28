//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Strive";

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

/* Ex.C
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 21)


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Emmanuel",
    surname: "Iyere",
    age: 33,
}

/* Ex.E
    Programmatically remove the age property from the previously create object.
*/

delete me.age

/* Ex.F
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["JavaScript", "Python", "C#", "C++"]


/* Ex.G
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()
