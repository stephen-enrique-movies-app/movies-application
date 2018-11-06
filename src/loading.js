"use strict";

import $ from '../node_modules/jquery';

export const loadMessage = () => {
    $('#movie-container').html('Loading...');
    // console.log("Loading...");
};



export const buildMovieCards = ((movies) => {

    let html = "";

    movies.forEach((movie) => {
        html += "<div class='movie-card float-left'>";
        html += "<h5 class=''><img class='img' src='img/" + movie.id + ".jpg'>";
        html += movie.title  + " (" + movie.year + ")</h5>";
        html += "<h5>Rating: " + movie.rating + "</h5>";
        html += "</div>";
    });
    return html
    // $('#movie-container').html(html);
});




// console.log(`${loadMessage}`);

// (() => {
//     $('#container').html('<h1>Loading...</h1>');
// });

// export default (name) => console.log(`Hello there, ${name}!`);
