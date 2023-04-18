// Task 1:


// var zakatPercent = 0.025
// var userInput =+ prompt("Enter your asset: ")
// var result = zakatPercent * userInput
// alert("Your Total Amount Of Zakah: "+ result)


// Task 2:

// var familyMembers =+ prompt("Total Number Of Family Members? ")
// var select =+ prompt("Choose a Fitrah Method: \n 1) Wheat 250 Rs \n 2) Barley 450 Rs \n 3) Dates 2100 Rs \n 4) Raisins 2800 Rs ")
// var wheat = familyMembers * 250
// var barley = familyMembers * 450
// var dates = familyMembers * 2100
// var raisins = familyMembers * 2800


// if (select==1) {
//     alert('Your Total Fitrah amount is: ' + wheat)
// }


// else if (select==2){
//     alert('Your Total Fitrah amount is: ' + barley)
// }



// else if (select==3){
//     alert('Your Total Fitrah amount is: ' + dates)
// }


// else if (select==4){
//     alert('Your Total Fitrah amount is: ' + raisins)
// }


//  else {
//     alert('Select correct method please')

// }

// Task 3:

// var secretNumber = 5
// var guess = + prompt("Enter a number: ")

// if (guess == 5) {
//     alert("Congratulations! You guessed the secret number")
// }
// else if(guess<=2){
//     alert("Your guess is too low")
// }
// else if(guess>=8){
//     alert("Your guess is too high")
// }

//  else {
//     alert("Try Again")
// }


// Task 4:

// var username = prompt("Enter Your Name: ");
// var final = username.charAt(0).toUpperCase() + username.slice(1);
// alert(("Your name with the first letter capitalized: " + final))

// Task 5:

// var contactNumbers = [ ]
// var contactNames = [ ]
// var num =+ prompt("Enter Your Number: ")
// var inputNmae = prompt("Enter Your Name: ")
// contactNumbers.push(num)
// contactNames.push(inputNmae)


// for (var i = 0; i < contactNumbers.length; i++) {
//   console.log((contactNumbers))
//   for (var i = 0; i < contactNames.length; i++) {
//     console.log((contactNames))
//   }
// }
// alert("List: " + contactNames + (" ") + contactNumbers)


// Task 6:

// var products = ['Chicken','Beef','Mutton']
// var position =+ prompt("Enter position: ")


// var products = ["Mango", "Apple", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Peach"]; 
// var userInput = (prompt(`Enter the position of the item you want to remove (1 - 8}):`)); 
// var removedItem = products.splice(userInput, 1 ); 
// console.log(`The removed item is:`+ removedItem);
// alert(`The removed item is: ` + removedItem); 
// console.log(`The remaining items in the array are: ` + products);
// alert(`The remaining items in the array are: ` + products); 
// console.log(`Total number of items remaining: ` + products.length);
// alert(`Total number of items remaining: ` + products.length);



// Task 7:

// var nation = prompt("Enter your Nationality: ")
// var updateNation = nation.toLowerCase
// var gender = prompt("Enter Your Gender: ")
// var updateGender = gender.toLowerCase
// var age = + prompt("Enter Your Age: ")
// var updateAge = age.toLowerCase

// if ((updateNation == "pakistani") || (updateNation == "indian")) {
//     if (gender == "male" && age >= 18) {
//         console.log('You are eligible to vote')
//     }
//         else if (gender== "female" && age>=18) {
//             var marriage = (prompt("Are you married?"))
//             var updateMarriage = marriage.toLowerCase
//             if (marriage== "yes") {
//                console.log('You Are Eligible to vote')
//             } else {
//                 console.log('You are not eligble')
//             }

//     } else {
//        console.log('You are not Eligible to vote')
//     }

// } else {
//         console.log("You are not eligible to vote")

//     }





// Task 8:

// var worldCupSquad = ['Babar', 'Shaheen', 'Rizwan', 'Amir', 'Shadab', 'Fakhar', 'Sarfaraz', 'Imad', 'Haris', 'Hasan', 'Hasnain', 'Imam', 'Asif', 'Shoaib', 'Hafeez']
// var Temporary = worldCupSquad.slice(3,16)
// alert(Temporary)