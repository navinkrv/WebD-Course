// alert("js linked!")


const rootContainer = document.querySelector(".root")
const count =1;
//referance
// <div class="node">
//         <p>Node 1</p>
//         <button>+</button>
//     </div>


//create .node container
const node = document.createElement("div")
// console.log(node);
node.classList.add("node")
rootContainer.append(node)  //.node container is added inside the rootContainer

// create and add paragraph inside .node container
const p= document.createElement("p")
p.innerHTML="Node "+count
node.append(p)




// // create and add button inside node

const button= document.createElement("button")
button.innerHTML="+"
node.append(button)