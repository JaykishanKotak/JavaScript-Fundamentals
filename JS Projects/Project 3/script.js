const courses = [
    {
        name : "Complete ReactJS Course",
        price : "2.5"
    },
    {
        name : "Complete AngularJS Course",
        price : "3.5"
    },
    {
        name : "Complete MERN Course",
        price : "7.5"
    },
    {
        name : "Complete C++ Course",
        price : "5"
    },
    {
        name : "Basics of Web Devlopment Course",
        price : "2.1"
    },
    {
        name : "Python with Backend Course",
        price : "4"
    },
]

{/* 
    <ul class="list-group">
      <li class="list-group-item">
        Javascript course<span class="float-right">$2.1</span>
      </li>
    </ul>
*/}

function genrateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""; //resets the list values
    courses.forEach( (course) => {
         const li = document.createElement("li");
         li.classList.add("list-group-item") ; // class is always the list

         const name = document.createTextNode(course.name);
         li.appendChild(name);

         const span = document.createElement("span"); // Ref :- <span class="float-right">$2.1</span>
         span.classList.add("float-right")
        
         const price = document.createTextNode("$ " + course.price);
         span.appendChild(price);

         li.appendChild(span); // append span intp list item
         ul.appendChild(li); // append list item into unorderd list
        }
    )
}

// genrateList();

window.addEventListener("load", genrateList);

const buttonOne = document.querySelector(".sort-btn-one");

buttonOne.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price );
    genrateList();
});

const buttonTwo = document.querySelector(".sort-btn-two");

buttonTwo.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price );
    genrateList();
});

