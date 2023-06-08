const fs = require('fs')

const genders = ['M', 'F']
const maleNames = ['John', 'Paul', 'Kerry', 'Bob', 'Tom', 'Bruce', 'Steve']
const femaleNames = ['Judy', 'Panam', 'Meredith', 'Ann', 'Sue', 'Veronica', 'Zoey']
const lastNames = ['Brown', 'Black', 'Scott', 'Spears', 'Lavigne', 'Alvarez', 'Palmer']
const people = []


function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

for (i = 1; i <= 20; i++) {
    let obj = {
        gender: '',
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        email: '',
    }

    const renderGender = randChoice(genders);
    obj.gender = renderGender;

    if (renderGender == 'M') {
        obj.gender = renderGender
        const renderName = randChoice(maleNames)
        obj.firstName = renderName;
    } else {
        obj.gender = renderGender
        const renderName = randChoice(femaleNames)
        obj.firstName = renderName;
    }

    obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    obj.age = (Math.round(Math.random() * (78 - 18) + 18));
    obj.phone = (Math.round(Math.random() * (999999999 - 111111111) + 111111111));

    const renderFirstName = obj.firstName;
    const renderLastName = obj.lastName;
    obj.email= renderFirstName + '.' + renderLastName +'@gmail.com';
    people.push(obj)

}

let peopleJson = JSON.parse(JSON.stringify(people))
console.log('array after json', peopleJson)

const jsonString = JSON.stringify(peopleJson)
fs.writeFile('./people.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }

});