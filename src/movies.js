// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = ((arr) => {
    const newArr = arr.map((movie) => {
        return movie.director;
    })
    return newArr;
});
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const spielMovies = arr.filter((movie) => {
        return movie.director === 'Steven Spielberg' &&
            movie.genre.includes('Drama')
    });
    return spielMovies.length;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    const rateSum = arr.reduce((accumulator, currentValue) => {
        if (currentValue.rate) {
            return accumulator + currentValue.rate;
        } else {

            return accumulator;
        }

    }, 0)

    return Number((rateSum / arr.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = ((arr) => {
    //Filter
    const dramaMovies = arr.filter((movie) => {
        return movie.genre.includes('Drama');
    });

    return ratesAverage(dramaMovies);

});

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear= ((movies)=> {
    const sortedMovies = movies.sort((a, b) => (a.year > b.year) ? 1 : -1);

    

    return sortedMovies;
});


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically= ((movies)=> {
    console.log(movies);
    const sortedMovies = [];
    movies.map((movie) => {
        sortedMovies.push(movie.title) ;
    })

    sortedMovies.sort((a, b) => (a > b) ? 1 : -1);
console.log(sortedMovies);
const newArr=[];
    if(sortedMovies.length<= 20){
        return sortedMovies;
    }else {
        for(let i=0; i<20;i++){
            newArr.push(sortedMovies[i]);
        }
        return newArr;
    }
    
});

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
