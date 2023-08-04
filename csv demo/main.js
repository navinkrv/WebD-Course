const rootContainer = document.querySelector(".root");

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

const subnodes =  document.querySelectorAll(".sub-node")
let i=0;

// for (let i = 0; i < subnodes.length; i++) {

//     if(i==0){
//         subnodes[i].style.top="67px"
//     }
//     else{
//         subnodes[i].style.top= i*137+"px"
//     }
    
    
    
// }

