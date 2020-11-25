const map = document.getElementById("map");
const description = document.getElementById("embedHtml");
const form = document.getElementById("form");

const embedMap = (data) => {
    const params = {
        key: 'AIzaSyCmAwU8fVLPlL5ugiK8UMIiUoslNA8cm3w',
        place: data
    }

    const { key, place } = params;

    let embedScope = `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=${place}&key=${key}" allowfullscreen></iframe>`;

    map.innerHTML = embedScope;
    description.value = embedScope;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputData = document.getElementById("searchAddress").value;
    embedMap(inputData);
});