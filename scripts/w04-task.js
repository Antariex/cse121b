/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Ariel",
  photo: "images/me.jpg",
  favoriteFoods: ["Asado", "Pizza", "Icecream"],
  hobbies: ["Coding", "Read comics", "Cycling"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "Buenos Aires",
    length: 24,
  },
  {
    place: "La Plata",
    length: 12,
  },
  {
    place: "Berisso",
    length: 1,
  }
);

/* DOM Manipulation - Output */

/* Name */
name_out = document.getElementById("name");
name_out.innerHTML = myProfile.name;

/* Photo with attributes */
photo_out = document.getElementById("photo");
photo_out.setAttribute("src", myProfile.photo);
photo_out.width = 240;
photo_out.height = 300;

/* Favorite Foods List*/
foodList = myProfile.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
  let list = document.createElement("li");
  list.innerText = foodList[i];
  document.querySelector("#favorite-foods").appendChild(list);
}

/* Hobbies List */
hobbiesList = myProfile.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
  let list = document.createElement("li");
  list.innerText = hobbiesList[i];
  document.querySelector("#hobbies").appendChild(list);
}

/* Places Lived DataList */
let placesOut = "";
place = myProfile.placesLived;
place.forEach(countPlaces);

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
  placesOut +=
    "<dt>" +
    place.place +
    "</dt>" +
    "<dd>" +
    place.length +
    " years" +
    "</dt>";
}