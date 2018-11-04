
"use strict";

/**
 * es6 modules and imports
 */
import $ from '../node_modules/jquery';
import {getMovies} from './api.js';

//=== Loading... Message
import loadMessage from './loading';
loadMessage();


getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});



//====== AJAX Request
$.ajax('./api/movies').done((data) => {
    console.log(data);


    //==== Function to build HTML
    const buildHtml = () => {


            //==== Function to build Title
            const buildTitle = (() => {
                `${$('div.container')
                    .replaceWith("<div id='main-container' class='container-fluid'>" +
                    "<h1 class='text-center'>Our Movie App</h1>" +
                    "<div id='movie-container' class='flex-container'></div>" +
                    "</div>")}`

            });
            buildTitle();


            //==== Function to build Movie Cards
            const buildMovieCards = ((data) => {
                let html = "";

                data.forEach((movie) => {
                    html += "<div class='movie-card float-left'>";
                    html += "<h5 class=''><img class='img' src='img/" + movie.id + ".jpg'>";
                    html += movie.title + "</h5>";
                    html += "<h5>Rating: " + movie.rating + "</h5>";
                    html += "<h5>ID# " + movie.id + "</h5>";
                    html += "</div>";
                    console.log(movie.image)
                });
                return html;
            });
            $(buildMovieCards(data)).appendTo('#movie-container');

    };
    buildHtml();


});

//================ Trash Bin ====================

                // <div id="main-container" class="container-fluid">
                //     <h1>Weather Application</h1>
                // <h3>San Antonio</h3>
                // <div id="weatherForecast" class="flex-container">
                //     <div id="day1" class="flex-item float-left weather-card"></div><br><br>
                //     <div id="day2" class="flex-item float-left weather-card"></div>
                //     <div id="day3" class="flex-item float-left weather-card"></div>
                //     </div>

                // let html = "";
                // html += $('div.container').replaceWith(;
                // html += "<div id='main-container' class='container-fluid'></div>");
                // $('h1').replaceWith(
                //     "<h1 class='text-center'>Our Movie App</h1>");

                // let html = "";
                // html += "<h1 class='text-center'>Our Movie App</h1>";
                // html += "<div id='main-container' class='container-fluid'>";
                // html += "<div id='movie-container' class='movie-card'>";
                // html += "</div></div>";
                // return html;


    // const buildTitle = (() => {
    //     let html = "";
    //
    //     html += "<h1 class='text-center'>Our Movie App</h1>";
    //     html += "<div id='main-container' class='container'>";
    //     html += "<div id='movie-container' class='movie-card'>";
    //     html += "</div></div>";
    //     return html;
    // });
    // $('body').html(buildTitle());




// <body>
//
//     <div id="main-container" class="container">
//         <div id="movie-container"class="movie-card">
//
//         </div>
//
//     </div>



    // const buildMovieCards = ((data) => {
    //     let html = "";
    //
    //     data.forEach((movie) => {
    //         html += "<div class='movie-card float-left'>";
    //         html += "<h3 class=''>" + movie.title + "</h3>";
    //         html += "<h3>Rating: " + movie.rating + "</h3>";
    //         html += "<h3>ID# " + movie.id + "</h3>";
    //         html += "</div>";
    //     });
    //     return html;
    // });
    // $('.movie-container').append(buildMovieCards());


