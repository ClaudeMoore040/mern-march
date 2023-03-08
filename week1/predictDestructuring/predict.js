const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // should be 'tesla
const [ ,otherRandomCar ] = cars // should be 'mercedes' i dont know if it will print 'honda as well though?/ did not print honda
//Predict the output
console.log(randomCar) /// should console log  tesla / i was correct
console.log(otherRandomCar) // should console log mercedes/ i wa correct

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // name is not defined or void 
//Predict the output
console.log(name); // undefined / i was correct
console.log(otherName);/// undefined / did not get ran

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  // this line should work according to the platform because of how its specified the property name / didnt work
//Predict the output
console.log(password); // should console log '12345'/ i was correct
console.log(hashedPassword); // should console log the hashed password?/ i was wrong came back undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // should be 2
const [,,,second] = numbers;// should be 5
const [,,,,,,,,third] = numbers; // should be 12
//Predict the output
console.log(first == second); /// should console log [8,5,3,5...ect] / i was wrong it came back as false?
console.log(first == third); // should console log [8,5,3,5,6,1,67,5,2] / iw as wrong it came back as true?

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //  if it does work its just saying {key} is equal to whats inside of the key: of const lastTest 
const { secondKey } = lastTest; // if it does work its just saying {secondKey} is equal to whats inside of the secondKey: of const lastTest 
const [ ,willThisWork] = secondKey; // should console log [5] if this works
//Predict the output
console.log(key); //should console log 'value' / i was correct
console.log(secondKey); // should console log [1,5,1,8,3,3] // i was correct
console.log(secondKey[0]); // should console log [1] // 
console.log(willThisWork); // should console log [5] if you can give an index a variable place holder / i was correct

