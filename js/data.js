import countries from "./app.js";

let ulEl = document.querySelector(".countries");

function updateUi(arr) {
  ulEl.innerHTML = "";
  arr.forEach((item) => {
    let { name, population, region, capital, flag } = item;

    ulEl.innerHTML += `
          <li class="country" data-id="${item.id}">
          <img src="${flag || name}" alt="${name}" />
          <div class="country__intro">
            <h4 class="name">${name}</h4>
            <p>Population: <span>${population}</span></p>
            <p>Region: <span class="region">${region}</span></p>
            <p>Capital: <span>${capital}</span></p>
          </div>
        </li>`;
  });
}
 updateUi(countries);
export default updateUi