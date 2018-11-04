"use strict";

const $ = require('../node_modules/jquery');

const loadMessage = () => {
    $('.container').html('<h1>Loading...</h1>');
    // console.log("Loading...");
};
export default loadMessage;

// console.log(`${loadMessage}`);

// (() => {
//     $('#container').html('<h1>Loading...</h1>');
// });

// export default (name) => console.log(`Hello there, ${name}!`);
