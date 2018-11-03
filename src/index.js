/**
 * es6 modules and imports
 */
const $ = require('../node_modules/jquery');


// import sayHello from './hello';
// sayHello('World');

// LOADING...
import loadMessage from './loading';
loadMessage();

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});



$.ajax('./api/movies').done((data) => {
    console.log(data);

        const buildMovieHtml = () => {
            let html = "";
            html += $('.container').html("<h1>" + data[1].title + "</h1>");
            return html;

    };
    buildMovieHtml();

});
    // $('.container').hide();



