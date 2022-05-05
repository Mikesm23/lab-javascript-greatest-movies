// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to map through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named getAllDirectors() that receives an array of movies as an argument and returns a new (mapped array).

// should return an array
// should return a new array, not update the original one OK
// should return a new array with the same length as the original one

function getAllDirectors(movies) {

  const justDirectors = movies.map(element => element.director);
  return justDirectors;
};

// getAllDirectors(movies);


/*
// 
Iteration 2: Steven Spielberg. The best? How many drama movies did STEVEN SPIELBERG direct?
One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.

Tests:
// should only count drama movies
// should return 2 if there are only 2 Steven Spielberg movies
// should return 4 when called with the array of movies exported from "movies.js"

Steps:

1. Filter 'Spielberg' Movies
2. Filter the ones that are 'Dramas'
3. Return a number of Drama movies directed by Spielberg

NOTE: I'm sorry, but I'm very far from being capable of doing this (at the moment...)

*/


function howManyMovies(movies) {

  const spielbergDramas = movies.filter(function (movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre === 'Drama') {
        return spielbergDramas.length;
    };
    
  });
return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
