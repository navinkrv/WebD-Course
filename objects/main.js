// alert("connected")

let data= [
    {
        title:"dairy milk",
        type:"chocolate"
    },
    {
        title:"kitkat",
        type:"chocolate"
    },
    {
        title:"mars",
        type:"planet"
    },
    {
        title:"earth",
        type:"planet"
    },
] 

// our json
let nodeData = [
    {
        title:"node 1",
        sub_node:[{title:"node 1.1"},{title:"node 1.2"}]
    },
    {
        title:"node 2",
        sub_node:[]
    },
    {
        title:"node 3",
        sub_node:[{title:"node 3.1"}]
    },
]

// csv app json

// Data: Array of objects
const treeData = [
    {
      id: 1,
      name: "Node 1",
      children: [
        //first child
        {
          id: 2,
          name: "Node 1.1",
          children: [
            { id: 3, name: "Node 1.1.1" },
            { id: 4, name: "Node 1.1.2" },
            { id: 9, name: "Node 1.1.3" },
          ],
        },
        // second child
        { id: 5, name: "Node 1.2" },
        //third child
        {
          id: 6,
          name: "Node 1.3",
          children: [
            { id: 7, name: "Node 1.3.1" },
            { id: 8, name: "Node 1.3.2" },
          ],
        },
      ],
    },
  ];




{/* <div class="planetBox">
            <h2>kitkat</h2>
            <p>Chocolate</p>
        </div> 
    */}

const root= document.querySelector(".root")


function planetBoxGenerator(title,type) {
    // outer div

const outerDiv = document.createElement("div")
outerDiv.classList.add("planetBox")
root.append(outerDiv)

//create h2
 const h2=document.createElement("h2")
h2.innerHTML=title
outerDiv.append(h2)

// create p

const p = document.createElement("p")
p.innerHTML=type
outerDiv.append(p)
}


function chocolateBoxGenerator(title,type) {
    // outer div

const outerDiv = document.createElement("div")
outerDiv.classList.add("chocolateBox")
root.append(outerDiv)

//create h2
 const h2=document.createElement("h2")
h2.innerHTML=title
outerDiv.append(h2)

// create p

const p = document.createElement("p")
p.innerHTML=type
outerDiv.append(p)
}



data.map(function(item) {
    
    if (item.type == "chocolate") {
        chocolateBoxGenerator(item.title,item.type)
    }
    else if(item.type == "planet"){
        planetBoxGenerator(item.title,item.type)
    }

})