import { fetchDogImages } from "./fetch-data.js";
// Basic styling for the page
document.body.style =
  "background-color:rebeccapurple; color:white; display:flex; flex-direction:column;";
// Basic styling for inputs
document.getElementById("inputs").style =
  "display:flex; justify-content:center; gap:10px;padding:2em;";
// Add logic to button so we can use data from the inputs to do something with
export function handleInputs() {
  const btn = document.getElementById("display-btn");
  const inputBreed = document.getElementById("inputBreed");
  const inputAmount = document.getElementById("inputAmount");
  btn.addEventListener("click", () => {
    // Check if breed and amount has a valid value
    if (inputBreed.value && inputAmount.value)
      displayDogs(inputBreed.value, inputAmount.value);
    else alert("Breed and amount required");
  });
}

// Take in breed and amount to fetch images of the breed and display [amount] of images
export async function displayDogs(breed, amount) {
  if (amount <= 0) alert("Amount can not be less than 1");
  const imageURLS = await fetchDogImages(breed);
  // Init container for images and give some basic styling
  const cont = document.getElementById("container");
  cont.style = "display:flex; flex-flow: wrap; justify-content:center;";
  cont.textContent = "";
  for (let i = 0; i < amount; i++) {
    const img = document.createElement("img");
    img.id = `dog${i + 1}`;
    img.src = imageURLS.message[i];
    img.alt = `dog of breed ${breed}`;
    img.style = `max-width:${cont.offsetWidth / 4}px;`;
    cont.appendChild(img);
  }
}
