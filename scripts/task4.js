/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let aboutMe = {}; 
// Step 2: Inside of the object, add a property named name with a value of your name as a string
aboutMe['name'] = "Brittany Ridley"; 
// // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
 aboutMe.photo = document.photo;
 document.photo.namedItem("photo").src;
// // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
 const favoriteFoods = ["Banana", "Orange", "Apple", "Mango"];
// // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
 const hobbies = ["cars", "coding", "shopping", "clothes"];
// // Step 6: Add another property named placesLived with a value of an empty array
//     //****Done */
// // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
aboutMe = {

    placesLived: [

               {place: 'Florida', length: '23 years'}]};
// // Step 8: For each property, add appropriate values as strings

// // Step 9: Add additional objects with the same properties for each place you've lived
 aboutMe.placesLived[0] = {"place":"Japan", "length":"8 years"}
 aboutMe.placesLived[1] = {"place":"Canada", "length":"10years"}
 aboutMe.placesLived[2] = {"place":"Italy", "length":"5 years"}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('#name').innerHTML = aboutMe;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
//Done
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
//??????
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

favoriteFoods.push(singleObj);
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
