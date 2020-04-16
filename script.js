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
function printStudentToDOM(studentName, subject, info, score) {
    return `
          <article>
              <h3>${studentName}</h3>
              <p>${subject}</p>
              <p>${info}</p>
              <p>${score}</p>
              <p>Languages: HTML, CSS, JavaScript</p>
          </article>`;
  }
  
  const printStudentToDOM = (name, subject, info) => {
      // body of function
  }
  
  
  for (let i = 0; i < students.length; i++) {
    let htmlString = printStudentToDOM(
      students[i].name,
      students[i].subject,
      students[i].info,
      students[i].score
    );
    console.log(htmlString);
    document.querySelector(".student-container").innerHTML += htmlString;
  }
  
  // printStudentToDOM("Austin", "His mom is really cool");
  // printStudentToDOM("Mike", "hooray for orby");
  // printStudentToDOM("Ashon", "learned a cool HTML shortcut");
  
  
  document.querySelector(".alumni-container").innerHTML = printStudentToDOM("Sydney wait", "coding", "good at stuff", 100)

