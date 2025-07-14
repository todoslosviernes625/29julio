const container = document.querySelector(".container");
const coffees = [

  {
    name: "Inventore",
    image:  "images/sem/3x4.gif"
  },
  {
    name: "Veritatis",
    image:  "images/sem/3x5.gif"
  },
  {
    name: "Accusantium",
    image:  "images/sem/3x6.gif"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card fade-in">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="9x9.html">Siguiente</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
