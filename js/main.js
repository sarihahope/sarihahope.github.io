const cards = document.querySelector('#cards');

async function getApi () {
    const url = 'https://all-books-api.p.rapidapi.com/getBooks';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '430bbdb2aemsh66a4a499f40a140p1fac5ajsn9aedd7390d89',
            'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
        }
    };

    try {

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cards.innerHTML += `
        <div class="card">
            <img src="${result[0].bookImage}" alt="book image">
            <h2>${result[0].bookTitle}</h2>
            <p>${result[0].bookDescription}</p>
            <p>Author: ${result[0].bookAuthor}</p>
            <p>Publisher: ${result[0].bookPublisher}</p>
            <a href="${result[0].amazonBookUrl}" target="_blank">Amazon</a>
            <p>ISBN: ${result[0].bookIsbn}</p>
            <p>Rank: ${result[0].bookRank}</p>
        </div>
        `;
    } catch (error) {
        console.error(error);
    }
}
getApi();

function saveData() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = document.querySelector('#input').value;
        localStorage.setItem('input', input);
    });
}
saveData();

function getData() {
    const input = localStorage.getItem('input');
    getApi(input);
}
getData();








