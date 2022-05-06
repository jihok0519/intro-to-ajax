// How to request data from an API using JavaScript and jQuery.

// There are many ways to do this.
// 1. jQuery's $.ajax() function
// 2. The Browser's fetch() function
// 3. Using the Axios http client library

// VARIABLES

const URL = "https://www.omdbapi.com/?apikey=dbce1723&t=Die+Hard";

// ELEMENT REFERENCES

const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");

// EVENT LISTENERS



// FUNCTIONS

function handleGetData() {
    $.ajax(URL).then(function(data) {
        console.log("movie data is ready.");
        // console.log(data);
        $title.text(data.Title);
        $year.text(data.Year);
        $rated.text(data.Rated);
        $('main').append(`<img src="${data.Poster}"/>`)
    }, function(error) {
        console.log("something is wrong...");
        console.log(error);
    })
}



// below is, give or take, similar to the one on top
 
// const promise = $.ajax({
//     url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// });

// promise.then(
//   (data) => {
//    console.log(data);
//   },
//   (error) => {
//    console.log('bad request: ', error);
//   }
// );

