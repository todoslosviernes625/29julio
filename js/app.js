const container = document.querySelector(".container");
const coffees = [
  {
    name: "Paseo La granja",
    image: "images/coffee1.gif"
  },
  {
    name: "Chichiriviche",
    image: "images/coffee2.gif"
  },
  {
    name: "Explicabo",
    image: "images/coffee3.gif"
  },
  {
    name: "Rchitecto",
    image: "images/coffee4.gif"
  },
  {
    name: " Beatae",
    image: "images/coffee5.gif"
  },
  {
    name: " Vitae",
    image: "images/coffee6.gif"
  },
  {
    name: "Inventore",
    image: "images/coffee7.gif"
  },
  {
    name: "Veritatis",
    image: "images/coffee8.gif"
  },
  {
    name: "Accusantium",
    image: "images/coffee9.gif"
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
                <a class="card--link" href="2x2.html">Siguiente</a>
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
