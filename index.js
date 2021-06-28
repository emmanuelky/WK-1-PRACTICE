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



// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = () => {
    return Math.floor(Math.random() * 7) + 1
}


/* Ex.2
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

/* Ex.6
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
