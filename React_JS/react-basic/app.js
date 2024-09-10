console.log("Hello World!!!")


var placeholder = document.getElementById("placeholder");

// placeholder.innerHTML = `<h2> Hello from app </h2>`


// // var h2 = document.createElement("h2");
// // h2.innerHTML = "Hello from App"
// placeholder.appendChild(h2);

var h2 = React.createElement('h4',{},"Hello from React!!");
// console.log(h2);

// placeholder.innerHTML = JSON.stringify(h2);
var root = ReactDOM.createRoot(placeholder)

root.render(h2);