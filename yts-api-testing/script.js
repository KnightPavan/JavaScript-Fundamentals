import { getMovieInfo } from "./yts.js";

getMovieInfo("https://yts.mx/api/v2/list_movies.json?quality=2160p").then((data)=>{
    renderMovies(data)
}).catch((err)=>{
    console.log(err);
})


const movieCardsSection = document.querySelector(".movie-cards-section")

function renderMovies(movies){
    const movieCardTemplate = document.querySelector("#movie-card-template")
    movies.forEach((movie)=>{
        const element = movieCardTemplate.content.cloneNode(true);
        element.querySelector("[data-title]").textContent = movie.title
        element.querySelector("[data-torrent-url]").href = movie.torrent
        element.querySelector("[data-torrent-url]").textContent = movie.torrent
        element.querySelector("[data-poster]").src = movie.coverImage
        movieCardsSection.append(element)
    })
}