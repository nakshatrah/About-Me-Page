function theCast() {
    const cast = ["Gina Rodriguez", "Justin Baldoni", "Yael Grobglas"];
    cast.push("Andrea Navedo", "Brett Dier", "Jaime Camil");
 
    const directors = ["Brad Silberling", "Uta Briesewitz", "Debbie Allen", "Ed Ornelas"];
    
    const totalCast = [...directors, ...cast];

    console.log(totalCast);
}

const rate = (ratings, numRatings) => {
    let sumOfRatings = 0;
    ratings.forEach(element => {
        sumOfRatings += element;
    });
    
    const avg = Math.round(sumOfRatings / numRatings);

    console.log(avg);
}

const ratings = [8, 9, 9, 7.5, 10];
rate(ratings, 5);

function add_info() {
    const movie = {
        Name: "Legally Blonde",
        Runtime: 94,
        YearReleased: 2001,
        Imdb: 6.5,
        Genre: "Comedy/Romance"
    }

    displayMovieDetails(movie);
}

function displayMovieDetails(movie) {
    for(let info in movie) {
        console.log(`${info}: ${movie[info]}`);
    }
}
