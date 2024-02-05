/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Ariel Antequiera";
let currentYear = 2024;
let profilePicture = 'images/me.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const foods = ['Asado', 'Sorrentinos', 'Pizza'];
foodElement.innerHTML = `${foods.join(', ')}`;

const anotherFood = 'Ice Cream';
foods.push(anotherFood); // push another food to the foods array
foodElement.innerHTML += `<br>${foods.join(', ')}`;

foods.shift([0]); // remove the first food from the foods array
foodElement.innerHTML += `<br>${foods.join(', ')}`;

foods.pop(foods.length -1); // remove the last food from the foods array
foodElement.innerHTML += `<br>${foods.join(', ')}`;



