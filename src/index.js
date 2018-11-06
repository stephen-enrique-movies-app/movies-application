
"use strict";

/**
 * es6 modules and imports
 */
import $ from '../node_modules/jquery';
import {getMovies} from './api.js';

//=== Loading... Message

import {loadMessage, buildMovieCards} from './loading';

loadMessage();



getMovies().then((movies) => {
    $('#movie-container').html(buildMovieCards(movies));

  movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

        //====== TAKES INPUT FROM FORM AND ADDS TO DB.JSON
            const newAddedMovie = $('#addMovieForm').on('submit', (e) => {
                e.preventDefault();

                let movieTitle = $('#movie-title').val();
                let movieRating = $('#movie-rating').val();
                // let movieRating = parseFloat($('#movie-rating').val());

                let movie = {title: movieTitle, rating: movieRating};
                    // UPDATES DATABASE
                    $.ajax({
                        type: "POST",
                        data :JSON.stringify(movie),
                        url: "./api/movies",
                        contentType: "application/json"
                    }).done(function()  {
                        $.get("./api/movies").done(function(data){
                            buildMovieCards(data);
                        });
                    });
            });
            newAddedMovie;


        //====== Form view toggle
            $('#addMovieForm').hide();
            $('#formHeader').click(function () {
                $('#addMovieForm').slideToggle();
            });

//=====================================================================================================================
//====== AJAX Request
// import {loadMessage} from './loading'

// fetch('./api/movies').done((data) => {
//     console.log(data);
//
//     buildMovieCards(data);
//
// });



//====== BUILDS MOVIE CARDS
// const buildMovieCards = ((movies) => {
//
//     let html = "";
//
//     movies.forEach((movie) => {
//         html += "<div class='movie-card float-left'>";
//         html += "<h5 class=''><img class='img' src='img/" + movie.id + ".jpg'>";
//         html += movie.title  + " (" + movie.year + ")</h5>";
//         html += "<h5>Rating: " + movie.rating + "</h5>";
//         html += "</div>";
//     });
//     $('#movie-container').html(html);
// });






//=====================================================================================================================

            //==== Function to build Title
            // const buildTitle = (() => {
            //     `${$('div.container')
            //         .replaceWith("<div id='main-container' class='container-fluid'>" +
            //         "<h1 id='main-heading' class='text-center'>Our Movie App</h1>" +
            //         "<div id='movie-container' class='flex-container'></div>" +
            //         "</div>")}`
            // });
            // buildTitle();



            //==== Function to add Form
            // const buildForm = (() => {
            //     `${$('#main-heading')
            //         .append("<div id='addForm'>" +
            //             "<br>" +
            //             "<h3 id='formHeader' class='float-left'>Add a Movie</h3>" +
            //             "<form id='addMovieForm'>\n" +
            //             "  <div class=\"row\">\n" +
            //             "    <div class=\"col\">\n" +
            //             "      <input id='movie-title' type=\"text\" class=\"form-control w-80\" placeholder=\"Title: \">\n" +
            //             "    </div>\n" +
            //
            //
            //             "    <div class=\"col\">\n" +
            //             "      <input type=\"text\" id='movie-rating' class=\"form-control w-50\" placeholder=\"Rating (1 - 5)\">\n" +
            //             "    </div>\n" +
            //             "<button type='submit' id='addMovieBtn' class=\"btn btn-primary\">Submit</button>" +
            //             "  </div>\n" +
            //             "</form>" +
            //             // "<input type='search' placeholder='Title...' onsubmit='click' class='w-90 float-left'>" +
            //
            //             "<br>" +
            //             "</div>" +
            //         "<br>")}`
            // });
            // buildForm();







            // $(buildMovieCards(data)).html('#movie-container');





                    // buildMovieCards(data);
                // $(buildMovieCards(data)).html($('#movie-container').children().last());


                    // fetch("./api/movies", {
                    //     type: "POST",
                    //     data: {
                    //         title: movieTitle,
                    //         rating: movieRating
                    //     }});
                    //
                    //     fetch("./api/movies", {
                    //     type: "GET",
                    //         data: {
                    //             title: "",
                    //             rating:""
                    //         }})
                    //         .then(buildMovieCards(data))
                    //         .catch("Error")







                // const addNewMovie = () => {
                // return`
                //     <div class='movie-card float-left'>
                //     <h5>${movieTitle}</h5>
                //     <h5>Rating: ${movieRating}</h5>
                //     </div>`
                // };
                // $(addNewMovie()).appendTo('#movie-container');


                // $(document).on('click', '#addMovieBtn', (e) => {
                //     //prevent default
                //     e.preventDefault();
                //     //get info from forms
                //     newAddedMovie(movieTitle, movieRating);
                //     //send to json file
                // });



//================ Trash Bin ====================





