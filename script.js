//write some code to print a student component to the dom

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Write some code to print a student component to the DOM
// document.querySelector(".student-container").innerHTML += `
//     <article>
//         <h3>Lindsey</h3>
//         <p>great at pumba websites</p>
//         <p>Languages: HTML, CSS, JavaScript</p>
//     </article>`

// document.querySelector(".student-container").innerHTML =  document.querySelector(".student-container").innerHTML + `
// <article>
//     <h3>Lindsey</h3>
//     <p>great at pumba websites</p>
//     <p>Languages: HTML, CSS, JavaScript</p>
// </article>`

// function printLindseyToDOM(){
//     document.querySelector(".student-container").innerHTML += `
//     <article>
//         <h3>Lindsey</h3>
//         <p>great at pumba websites</p>
//         <p>Languages: HTML, CSS, JavaScript</p>
//     </article>`
// }

// function printMikeToDOM(){
//     document.querySelector(".student-container").innerHTML += `
//     <article>
//         <h3>Mike</h3>
//         <p>has a cute cat named Orby</p>
//         <p>Languages: HTML, CSS, JavaScript</p>
//     </article>`
// }

// printLindseyToDOM()
// printMikeToDOM()

// Doer
// function printStudentToDOM(studentName, subject, info, score){
//     document.querySelector(".student-container").innerHTML += `
//     <article>
//         <h3>${studentName}</h3>
//         <p>${subject}</p>
//         <p>${info}</p>
//         <p>${score}</p>
//         <p>Languages: HTML, CSS, JavaScript</p>
//     </article>`
// }

// Maker function
// function printStudentToDOM(studentName, subject, info, score) {
//     return `
//           <article>
//               <h3>${studentName}</h3>
//               <p>${subject}</p>
//               <p>${info}</p>
//               <p>${score}</p>
//               <p>Languages: HTML, CSS, JavaScript</p>
//           </article>`;
//   }
  
//   const printStudentToDOM = (name, subject, info) => {
      // body of function
//   }
  
  
//   for (let i = 0; i < students.length; i++) {
//     let htmlString = printStudentToDOM(
//       students[i].name,
//       students[i].subject,
//       students[i].info,
//       students[i].score
//     );
//     console.log(htmlString);
//     document.querySelector(".student-container").innerHTML += htmlString;
//   }
  
  // printStudentToDOM("Austin", "His mom is really cool");
  // printStudentToDOM("Mike", "hooray for orby");
  // printStudentToDOM("Ashon", "learned a cool HTML shortcut");
  
  
//   document.querySelector(".alumni-container").innerHTML = printStudentToDOM("Sydney wait", "coding", "good at stuff", 100)



// Practice: Student Components
// Create a new project sub-directory in your workspace/javascript directory.
// Paste the array of student objects above into your JavaScript file.
// Copy the createStudentComponent function into your code.
const createStudentComponent = (name, subject, info) => {
    return `
        <div class="student">
            <h1>${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `
}
// Add the following styles to your CSS.
//done
// Add a container article to your HTML.
// <article id="container"></article> */
// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
for (let i = 0; i < students.length; i++) {
    let studentComponent = ""
    if (students[i].score >= 60) {
        studentComponent = ...
    } else {
        studentComponent = ...
    }
}
// If a student is passing, then the structure should look like the following.

// <div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Subject</section>
//     <aside class="pushRight">Additional information</aside>
// </div> //



// Practice: One Object to Rule Them All
// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

function printStudentObjectsToDom(studentsObject) {
    console.log(studentsObject)
    return `
          <article>
              <h3>${studentsObject.name}</h3>
              <p>${studentsObject.subject}</p>
              <p>${studentsObject.info}</p>
              <p>${studentsObject.score}</p>
              <p>Languages: HTML, CSS, JavaScript</p>
          </article>`;
          
}
 
for (let i = 0; i < students.length; i++) {
    let htmlString = printStudentObjectsToDom(
      students[i]);
    console.log(htmlString)
    document.querySelector(".student-container").innerHTML += htmlString;
  }
//   document.querySelector(".student-container").innerHTML += htmlString; won't work out here, because it does not have a global scope.

//   for (let i = 0; i < students.length; i++) {
//         let htmlString = printStudentObjectsToDom(
//           students[i].name,
//           students[i].subject,
//           students[i].info,
//           students[i].score
//         );
//         console.log(htmlString);
//         document.querySelector(".student-container").innerHTML += htmlString;
//       } this is doing too much ya dummy.  It's doing the same work twice.

// Then refactor your string interpolation code to use the object properties.



