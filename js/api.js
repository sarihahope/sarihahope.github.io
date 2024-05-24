async function getBooks() {
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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getBooks();


