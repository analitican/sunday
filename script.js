const test = document.querySelectorAll("li .nav-item");
console.log(test);

fetch("https://raw.githubusercontent.com/analitican/sunday/master/menu.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
  });

// var home = data();

// document.getElementById("main");
// main.innerHTML = `${home}`;

let menu = ["Home", "Pricing"];
console.log(menu);
