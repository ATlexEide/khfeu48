import { fetchDogImages } from "./fetch-data.js";

export function handleInputs() {
  const btn = document.getElementById("display-btn");
  const inputBreed = document.getElementById("inputBreed");
  const inputAmount = document.getElementById("inputAmount");
  btn.addEventListener("click", () => {
    if (inputBreed.value && inputAmount.value)
      displayDogs(inputBreed.value, inputAmount.value);
    else alert("Breed and amount required");
  });
}

export async function displayDogs(breed, amount) {
  if (amount <= 0) alert("Amount can not be less than 1");
  const imageURLS = await fetchDogImages(breed);
  const cont = document.getElementById("container");
  cont.style = "display:flex; flex-flow: wrap; justify-content:center;";
  cont.textContent = "";
  for (let i = 0; i < amount; i++) {
    const img = document.createElement("img");
    img.id = `dog${i + 1}`;
    img.src = imageURLS.message[i];
    img.alt = `dog of breed ${breed}`;
    img.style = `max-width:${cont.offsetWidth / amount};`;
    cont.appendChild(img);
  }
}
