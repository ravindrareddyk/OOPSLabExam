// // Valid student credentials
// // const validUsers = {
// //   "STU101": "1234",
// //   "STU102": "5678",
// //   "STU103": "9999"
// // };

// const validUsers = {
//   "O230949": "4998",
//   "S230215": "3512",
//   "S230223": "9929",
//   "S230334": "8761",
//   "S230335": "3040",
//   "S230364": "7318",
//   "S230505": "1034",
//   "S230542": "2472",
//   "S230647": "4449",
//   "S230678": "5446",
//   "S230705": "9492",
//   "S230723": "9096",
//   "S230774": "3973",
//   "S230833": "3581",
//   "S230873": "4811",
//   "S230904": "9935",
//   "S230987": "7379",
//   "S230989": "4653",
//   "S231144": "2102",
//   "S231157": "1319",
//   "S231173": "8210",
//   "S231195": "8381"
// };



// // List of C program questions
// const questions = [
//   "1. Write a C program to find the factorial of a given number.",
//   "2. Write a C program to reverse a given number.",
//   "3. Write a C program to find whether a number is prime or not.",
//   "4. Write a C program to check whether a string is a palindrome.",
//   "5. Write a C program to sort an array in ascending order.",
//   "6. Write a C program to display the Fibonacci series up to N terms.",
//   "7. Write a C program to find the largest and smallest elements in an array.",
//   "8. Write a C program to count the number of vowels and consonants in a string.",
//   "9. Write a C program to calculate the sum and average of N numbers using an array.",
//   "10. Write a C program to swap two numbers without using a third variable.",
//   "11. Write a C program to read and display a matrix using 2D arrays.",
//   "12. Write a C program to add two matrices.",
//   "13. Write a C program to find the transpose of a matrix.",
//   "14. Write a C program to find the factorial of a number using recursion.",
//   "15. Write a C program to find the sum of digits of a number using recursion."
// ];

// function verifyUser() {
//   const id = document.getElementById("studentId").value.trim();
//   const pin = document.getElementById("pinCode").value.trim();
//   const questionBox = document.getElementById("question");

//   // Check if already logged in this session
//   const storedId = sessionStorage.getItem("studentId");
//   const storedQuestion = sessionStorage.getItem("question");

//   if (storedId && storedQuestion) {
//     questionBox.innerText = "Your Question:\n\n" + storedQuestion;
//     document.getElementById("loginBox").style.display = "none";
//     return;
//   }

//   // Validate credentials
//   if (validUsers[id] && validUsers[id] === pin) {
//     const randomIndex = Math.floor(Math.random() * questions.length);
//     const selectedQuestion = questions[randomIndex];

//     // Store in sessionStorage (lock for session)
//     sessionStorage.setItem("studentId", id);
//     sessionStorage.setItem("question", selectedQuestion);

//     questionBox.innerText = "Your Question:\n\n" + selectedQuestion;
//     document.getElementById("loginBox").style.display = "none";
//   } else {
//     questionBox.innerText = "❌ Invalid ID or 4 digit number. Please try again.";
//   }
// }

// // When page reloads, restore session data if available
// window.onload = function() {
//   const storedId = sessionStorage.getItem("studentId");
//   const storedQuestion = sessionStorage.getItem("question");

//   if (storedId && storedQuestion) {
//     document.getElementById("loginBox").style.display = "none";
//     document.getElementById("question").innerText = "Your Question:\n\n" + storedQuestion;
//   }
// };

// ✅ Valid student credentials
const validUsers = {
  "N230245": "2467",
  "O230040": "1717",
  "O230080": "9373",
  "O230442": "2911",
  "O230599": "7787",
  "O230730": "5526",
  "O230742": "9653",
  "R230005": "1172",
  "R230035": "5806",
  "R230045": "7599",
  "R230049": "6918",
  "R230056": "9775",
  "R230068": "6943",
  "R230069": "7160",
  "R230070": "1474",
  "R230109": "9362",
  "R230111": "3946",
  "R230119": "1041",
  "R230159": "8940",
  "R230170": "4395",
  "R230190": "5399",
  "R230201": "6216",
  "R230208": "8429",
  "R230210": "4489",
  "R230248": "1348",
  "R230258": "4655",
  "R230272": "3608",
  "R230348": "3798",
  "R230363": "4032",
  "R230367": "8724",
  "R230383": "9093",
  "R230401": "1776",
  "R230412": "6049",
  "R230433": "5797",
  "R230439": "5024",
  "R230469": "1897",
  "R230504": "1664",
  "R230512": "8966",
  "R230521": "7116",
  "R230528": "1372",
  "R230534": "4186",
  "R230551": "1320",
  "R230556": "2884",
  "R230578": "2450",
  "R230595": "8818",
  "R230598": "4399",
  "R230599": "9714",
  "R230604": "6373",
  "R230619": "6048",
  "R230636": "1318",
  "R230652": "9980",
  "R230658": "2376",
  "R230664": "6871",
  "R230668": "8562",
  "R230669": "1833",
  "R230679": "1297",
  "R230687": "6507",
  "R230712": "8029",
  "R230718": "4679",
  "R230720": "6680",
  "R230798": "5007",
  "R230809": "7396",
  "R230810": "3811",
  "R230843": "6546",
  "R230846": "2753",
  "R230856": "7057",
  "R230859": "2962",
  "R230884": "4064",
  "R230939": "2262",
  "R230944": "1807",
  "R230949": "6223",
  "S230011": "1196",
  "S230164": "2244",
  "S230457": "4671",
  "S230486": "3689",
  "R210118": "2730"
};

// ✅ Question list
// const questions = [
//   "1. Write a C program to find the grade of a student based on marks using an if-else if ladder.",
//   "2. Write a C program to reverse a given number.",
//   "3. Write a C program to display the multiplication table of a given number using a for loop.",
//   "4. Write a C program to check whether a number is positive, negative, or zero using an if-else ladder.",
//   "5. Write a C program to sort an array in ascending order.",
//   "6. Write a C program to check whether a number is even or odd using an if statement.",
//   "7. Write a C program to find the largest and smallest elements in an array.",
//   "8. Write a C program to count the number of vowels and consonants in a string.",
//   "9. Write a C program to calculate the sum and average of N numbers using an array.",
//   "10. Write a C program to swap two numbers without using a third variable.",
//   "11. Write a C program to display the day of the week based on user input (1 for Monday, 2 for Tuesday, etc.) using a switch statement.",
//   "12. Write a C program to add two matrices.",
//   "13. Write a C program to create a simple calculator using a switch statement.",
//   "14. Write a C program to find the factorial of a number using recursion.",
//   "15. Write a C program to find the sum of digits of a number using recursion.",
//   "16. Write a C program to display numbers from 1 to 10 using a for loop."
// ];

const questions = [

  // 🔹 ARRAYS
  "1. Write a C++ program to find the maximum element in an array.",
  "2. Write a C++ program to reverse an array.",
  "3. Write a C++ program to count even and odd elements in an array.",
  "4. Write a C++ program to find the sum and average of array elements.",
  "5. Write a C++ program to search an element using linear search.",
  "6. Write a C++ program to merge two arrays.",
  "7. Write a C++ program to remove duplicate elements from an array.",
  "8. Write a C++ program to find the second largest element in an array.",

  // 🔹 POINTERS
  "9. Write a C++ program to swap two numbers using pointers.",
  "10. Write a C++ program to find sum of two numbers using pointers.",
  "11. Write a C++ program to traverse an array using pointers.",
  "12. Write a C++ program to find the largest element using pointers.",
  "13. Write a C++ program to demonstrate pointer arithmetic.",
  "14. Write a C++ program to allocate memory dynamically using new operator.",
  "15. Write a C++ program to reverse an array using pointers.",
  "16. Write a C++ program to compare two values using pointers.",

  // 🔹 ACCESS SPECIFIERS
  "17. Write a C++ program to demonstrate public access specifier.",
  "18. Write a C++ program to access private data using member functions.",
  "19. Write a C++ program to demonstrate protected members.",
  "20. Write a C++ program to show difference between public and private members.",
  "21. Write a C++ program to implement encapsulation using private variables.",
  "22. Write a C++ program with public, private and protected members.",
  "23. Write a C++ program using getter and setter functions.",
  "24. Write a C++ program to restrict direct access to data members.",

  // 🔹 INHERITANCE
  "25. Write a C++ program to demonstrate single inheritance.",
  "26. Write a C++ program to demonstrate multilevel inheritance.",
  "27. Write a C++ program to demonstrate multiple inheritance.",
  "28. Write a C++ program to demonstrate hierarchical inheritance.",
  "29. Write a C++ program to show constructor execution in inheritance.",
  "30. Write a C++ program to demonstrate function overriding.",
  "31. Write a C++ program to show effect of access specifiers in inheritance.",
  "32. Write a C++ program to model Employee and Manager using inheritance.",

  // 🔹 FUNCTION OVERLOADING
  "33. Write a C++ program to add two numbers using function overloading.",
  "34. Write a C++ program to calculate area of different shapes using overloading.",
  "35. Write a C++ program to display different data types using function overloading.",
  "36. Write a C++ program to swap values using function overloading.",
  "37. Write a C++ program to find maximum using function overloading.",
  "38. Write a C++ program with functions having different number of parameters.",
  "39. Write a C++ program to demonstrate compile-time polymorphism.",
  "40. Write a C++ program to implement a calculator using function overloading.",

  // 🔹 TYPE CASTING
  "41. Write a C++ program to demonstrate implicit type casting.",
  "42. Write a C++ program to demonstrate explicit type casting.",
  "43. Write a C++ program to convert float to integer.",
  "44. Write a C++ program to convert character to ASCII value.",
  "45. Write a C++ program to convert double to float.",
  "46. Write a C++ program to demonstrate type casting in division.",
  "47. Write a C++ program using static_cast.",
  "48. Write a C++ program to demonstrate type safety using casting.",

  // 🔹 FUNCTION TEMPLATES
  "49. Write a C++ program to create a generic function to add two numbers.",
  "50. Write a C++ program to swap values using function template.",
  "51. Write a C++ program to find maximum using function template.",
  "52. Write a C++ program to find minimum using function template.",
  "53. Write a C++ program to display array elements using templates.",
  "54. Write a C++ program to implement a generic calculator using templates.",
  "55. Write a C++ program to compare two values using template function.",
  "56. Write a C++ program to demonstrate templates with multiple data types.",

  // 🔹 VECTORS
  "57. Write a C++ program to create and display elements of a vector.",
  "58. Write a C++ program to demonstrate push_back() and pop_back().",
  "59. Write a C++ program to sort elements in a vector.",
  "60. Write a C++ program to search an element in a vector.",
  "61. Write a C++ program to reverse a vector.",
  "62. Write a C++ program to remove an element from a vector.",
  "63. Write a C++ program to find sum of vector elements.",
  "64. Write a C++ program to create a vector of objects.",

  // 🔹 FILE HANDLING
  "65. Write a C++ program to write data into a file.",
  "66. Write a C++ program to read data from a file.",
  "67. Write a C++ program to append data to a file.",
  "68. Write a C++ program to count number of words in a file.",
  "69. Write a C++ program to copy contents from one file to another.",
  "70. Write a C++ program to store student details in a file.",
  "71. Write a C++ program to search for a word in a file.",
  "72. Write a C++ program to read and write binary files."

];

// ✅ Fixed question assignment (id → question index)
// Fixed question assignment (id → question index or indices)
// Use arrays when you want a pool to choose from (one picked each login).
// const questionAssignments = {
//   "S230542": [5, 15],    // choose ONE of these every login
//   "S231195": 16          // single question (works too)
//   // add more as needed
// };

// helper: convert an assigned numeric index to the actual question text
function questionFromNumber(n) {
  if (!Number.isInteger(n)) return null;
  // Accept 1-based (human) or 0-based (programmer) indexing:
  if (n >= 1 && n <= questions.length) return questions[n - 1]; // 1-based
  if (n >= 0 && n < questions.length) return questions[n];      // 0-based
  return null;
}

// Return a single question string for the user
function getQuestionForUser(id) {
  if (questionAssignments.hasOwnProperty(id)) {
    const assigned = questionAssignments[id];

    // If it's an array -> pick one random element from the array
    if (Array.isArray(assigned) && assigned.length > 0) {
      // shuffle-safe: pick random element
      const choice = assigned[Math.floor(Math.random() * assigned.length)];
      const q = questionFromNumber(choice);
      if (q) return q;
      // if the chosen element is invalid, try to find any valid in the array
      for (let i = 0; i < assigned.length; i++) {
        const alt = questionFromNumber(assigned[i]);
        if (alt) return alt;
      }
      // fallback to random question if none valid
    }

    // If single number assigned
    if (Number.isInteger(assigned)) {
      const q = questionFromNumber(assigned);
      if (q) return q;
    }
  }

  // Default: random single question from whole list
  return questions[Math.floor(Math.random() * questions.length)];
}

// Verify user and display one chosen question (store single string)
function verifyUser() {
  const id = document.getElementById("studentId").value.trim();
  const pin = document.getElementById("pinCode").value.trim();
  const questionBox = document.getElementById("question");

  const storedId = sessionStorage.getItem("studentId");
  const storedQuestion = sessionStorage.getItem("question");

  // Restore if already logged in
  if (storedId && storedQuestion) {
    questionBox.innerText = "Your Question:\n\n" + storedQuestion;
    document.getElementById("loginBox").style.display = "none";
    disableBack();
    return;
  }

  // Validate credentials
  if (validUsers[id] && validUsers[id] === pin) {
    const selectedQuestion = getQuestionForUser(id);

    // Save a plain string (single question)
    sessionStorage.setItem("studentId", id);
    sessionStorage.setItem("question", selectedQuestion);

    //questionBox.innerText = "Your Question:\n\n" + selectedQuestion;
    showModal(selectedQuestion);

    document.getElementById("loginBox").style.display = "none";
    disableBack();
  } else {
    questionBox.innerText = "❌ Invalid ID or 4 digit number. Please try again.";
  }
}

function showModal(questionText) {
  const modal = document.getElementById("questionModal");
  document.getElementById("questionText").innerText = questionText;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("questionModal").style.display = "none";
}

// Optional: close modal by clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("questionModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


// On load: restore session and disable back
window.onload = function () {
  const storedId = sessionStorage.getItem("studentId");
  const storedQuestion = sessionStorage.getItem("question");

  if (storedId && storedQuestion) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("question").innerText =
      "Your Question:\n\n" + storedQuestion;
  }

  disableBack();
};
