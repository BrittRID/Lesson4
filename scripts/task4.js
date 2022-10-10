/* Lesson 4 */
/* DATA */
// Step 1: Declare a new variable to hold information about yourself
 let about = {
  name: "Brit",
  favoriteFoods: ['Eggs', 'fruit', 'mike'],
  hobbies: ['reading', 'stuff', 'more stuff'],
  placesLived:[ {place: 'A place to live', length: '18 years'}]
}; 
document.getElementById("name").innerHTML = about.name;

//   function printInformation(Information){
//     document.getElementById('name').innerHTML = `<div class="info">
//     <ul>
//         <li>Name: ${about.name}</li>
//         <li>Favorite Foods: ${Information.food}</li>
//         <li>Hobbies: ${Information.hobbies}</li>
//         <li>Places Lived: ${Information.places}</li>
//     </ul>
// </div>`; 
//   }
  // about.placesLived.push("place"); 
  // about.placesLived[0] = {"place": "place", "length": "6 years"};
  // about.placesLived[1] = {"place": "place", "length": "6 years"};
  // about.placesLived[2] = {"place": "place", "length": "6 years"};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
//Done
// // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
//Done
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
//Done
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
//Done
// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
 placesLived = { "place": "alabama", "length": "3 Year" };
// /* OUTPUT */

 // Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
//Done
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
//??????
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let myList = document.getElementById('favorite-foods')
about.favoriteFoods.forEach(food => {
  let list = document.createElement('li');
  list.textContent = food;
  myList.appendChild(list);
})
// Step 6: Repeat Step 4 for each hobby in the hobbies property
about.hobbies.forEach((hobbyList) => 
{
  let HL = document.createElement("li");
  HL.textContent = hobbyList;
  document.getElementById("hobbies").appendChild(HL);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

let dt1 = document.createElement("dt");
dt1.textContent = about.placesLived[0].place;

let dd1 = document.createElement("dd");
dd1.textContent = about.placesLived[0].length;

document.querySelector("#places-lived").appendChild(dt1);
document.querySelector("#places-lived").appendChild(dd1);


