/* <div id=root>
<div id="parent">
<h1>react</h1> */
// </div>
// </div>


// const heading=React.createElement("h1",{},"This is react cdn");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


import React from "react";
import ReactDom from "react-dom/client";

const heading=React.createElement("div",{id:"parent"},React.createElement("h1",{h1:"heading"},"This is react cdn"));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


/* <div> */
//  <div id="root">
//         <div id="child">
                // <h1>react</h1>
//         </div>
//     </div>
// </div>