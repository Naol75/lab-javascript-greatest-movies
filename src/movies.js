// Iteration 1: All directors? - Get the array of all directors.
// Bonus: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?




function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((element) => {
        return element.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let dramaMovies = moviesArray.filter ((element) => {
        return (element.director === "Steven Spielberg" && element.genre.includes("Drama"))
    })
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let autoSum = moviesArray.reduce ((acc, element) => {
        if (element.score) {
            return acc + element.score
        }
        else {
            return acc
        }
    }, 0)
    return parseFloat((autoSum / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesArray = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    }
    )

    if(dramaMoviesArray.length === 0) {
        return 0
    }

    let autoSum = dramaMoviesArray.reduce ((acc, element) => {
        if (element.score) {
            return acc + element.score
        }
        else {
            return acc
        }
    }, 0)
    return parseFloat((autoSum / dramaMoviesArray.length).toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
    let cloneArray = (JSON.parse( JSON.stringify(moviesArray) )).sort((elem1, elem2) => {
        if(elem1.year > elem2.year) {
            return 1
        }
        else if( elem1.year < elem2.year) {
            return -1
        }
        else if(elem1.year === elem2.year){
            return elem1.title.localeCompare(elem2.title)
        }
    }
    )
    return cloneArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map((elem1) =>{
        return elem1.title
    }

    )
    let orderedTitles = movieTitles.sort((elem1, elem2) => {
        if(elem1 > elem2) {
            return 1
        }
        else if( elem1 < elem2) {
            return -1
        }
        else {
            return 0
        }
    })
    let finalArray = movieTitles.splice(0,20)
    return finalArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}