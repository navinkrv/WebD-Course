const btn = document.querySelector("button")
const container = document.querySelector("div")


//Event Listeners

btn.addEventListener("click",function(){
    // alert("button is clicked!")

    // container.innerHTML="button is clicked!"
    // container.classList  // get the list of the clases
    // container.classList.add("class2") // add class2 to the list of existing classes

    // container.style.visibility="visible"




    // create element on click

    const newContainer = document.querySelector(".createdElementContainer")

// console.log(newContainer);

const heading=document.createElement("h1")

heading.innerHTML= "this is created dynamically!"

newContainer.append(heading)
})

/*
scroll
mouseover
mouseout
load
*/

// create element





