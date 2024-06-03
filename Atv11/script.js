document.getElementById('searchButton').addEventListener('click', searchMovie);

function searchMovie() {
    var movieName = document.getElementById('movieSearch').value;
    var apiKey = '5db51889'; 
    var url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.Response === "True"){
                document.getElementById('movieDetails').innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <p><strong>Gênero:</strong> ${data.Genre}</p>
                    <p><strong>Diretor:</strong> ${data.Director}</p>
                    <img src="${data.Poster}" alt="Poster do filme">
                `;
            } else {
                document.getElementById('movieDetails').innerHTML = `<p>Filme não encontrado. Tente novamente.</p>`;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados do filme:', error);
        });
}