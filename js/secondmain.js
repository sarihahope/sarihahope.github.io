const url: https://www.googleapis.com/books/v1/volumes?q=${book.value}:keyes&key={$apiKey};
const apiKey = "AIzaSyCsqnux72xXteAmKLeddy3g5meFktXcNXw";

//function to create a tmeplate for the inner html

function createTemplate(result) {
    return `
    <div class="card">
        <img src="${result.volumeInfo.imageLinks.thumbnail}" alt="book image">
        <h2>${result.volumeInfo.title}</h2>
        <p>${result.volumeInfo.description}</p>
        <p>Author: ${result.volumeInfo.authors}</p>
        <p>Publisher: ${result.volumeInfo.publisher}</p>
        <a href="${result.volumeInfo.infoLink}" target="_blank">Amazon</a>
        <p>ISBN: ${result.volumeInfo.industryIdentifiers[0].identifier}</p>
        <p>Rank: ${result.volumeInfo.averageRating}</p>
    </div>
    `;
}

async function getApi() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    cards.innerHTML += createTemplate(result.items[0]);
}

getApi();


