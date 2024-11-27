export async function fetchBreeds() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const breeds = await response.json();
    console.log(breeds.message);

    const list = document.getElementById("inputBreed");
    for (const key in breeds.message) {
      const breedOption = document.createElement("option");
      breedOption.value = key;
      breedOption.textContent = key;
      list.appendChild(breedOption);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchDogImages(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
}
