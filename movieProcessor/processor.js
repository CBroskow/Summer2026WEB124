var movies =
  ["Interstellar,sci-fi,8.7,askmicklasalle@gmail.com",
    "GoodFellas,gangster,8.7,812filmreviews@gmail.com",
    "Seven,thriller,8.6,filmspectrum@gmail.com",
    "Battlefield Earth,sci-fi,2.5,brian@dreamweaverarts.org",
    "Disaster Movie,parody,1.9"];
var id = Symbol("id");
main();

function main() {
  let movieObjects = [];
  movies.forEach((movie) => {
    let movieObj = new Movie(movie);
    movieObjects.push(movieObj);
  });
  console.log("List of movie summaries:");
  movieObjects.forEach((movieObj) => {
    console.log("  " + movieObj.getSummary());
  });
  let highlyRatedMovies = [];
  movieObjects.forEach((movieObj) => {
    if (movieObj.isHighlyRated()) {
      highlyRatedMovies.push(movieObj);
    }
  });
  console.log("\nList of highly rated movies:");
  highlyRatedMovies.forEach((movieObj) => {
    console.log("  " + movieObj.title);
  });
  console.log("\nAre the following email addresses valid?");
  movieObjects.forEach((movieObj) => {
    console.log("  \"" + movieObj.getReviewEmail() + "\" is valid: " +
      isEmailValid(movieObj.getReviewEmail()));
  });
  console.log("\nUse try/catch to handle an error:");
  console.log("  \"id\" is valid: " + isEmailValid(id));
  console.log("\nA special message about one movie:");
  // Sort the movies by rating (descending)
  movieObjects.sort(function(a, b) {return b.rating - a.rating});
  // Display the highest rated movie (first in the newly sorted array)
  console.log("  The highest rated movie title is: \"" + movieObjects[0].title + "\"");
}

function Movie(inputString) {
  let inputArray = inputString.split(",");
  this.title = inputArray[0];
  this.genre = inputArray[1];
  this.rating = parseFloat(inputArray[2]);
  this.reviewEmail = inputArray[3];
  this.id = id;

  this.getSummary = function() {
    return this.title + " is a " + this.genre + " movie with a rating of " + this.rating;
  };

  this.isHighlyRated = function() {
    return this.rating >= 8;
  };

  this.getReviewEmail = function() {
    return this.reviewEmail?.toString() ?? "none";
  };

  this.getID = function() {
    return this.id;
  };

  this.toString = function() {
    return `{title: "${this.title}", genre: "${this.genre}", rating: ${this.rating}, ` +
      `reviewEmail: "${this.getReviewEmail()}"}`;
  };
}

function isEmailValid(email) {
  try {
    let regexp = /\w+@\w+.\w+/;
    return regexp.test(email);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    return false;
  }
}

/*
At the bottom of your .js file, answer the following questions as comments:
      - What are array methods, and how did you use them in this assignment?
      Array methods process the information contained within arrays.  In this assignment:
        1.  The "sort" method sorted the array of movie objects by rating.
        2.  The "forEach" method is ued several times to iterate the array of movie objects.

      - What does your regular expression check for?
      The regular expression "/\w+@\w+.\w+/" checks for three sequences of word characters,
        separated by "@" and then ".".

      - How does try/catch help prevent errors in your program?
      The try/catch construct allows the graceful handling of runtime errors, rather than 
        the abnormal termination of programs.
*/
