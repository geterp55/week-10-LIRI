// 1.Make a JavaScript file named liri.js
// 2.At the top of the liri.js file make it so you grab the data from keys.js and store it into a variable to use
// 3.Make it so liri.js can take in one of the following arguments
// ------------------------------------------------------------------------------------
//Make a switch and use each of the following as the variables:

// 		* my-tweets
// 		* spotify-this-song
// 		* movie-this
// 		* do-what-it-says

// var my-tweets = twitterNow();
// var spotify-this-song = spotifyNow();
// var movie-this = movieNow();

var type = process.argv[2];
switch(type){
  case "my-tweets":
	twitterNow();
    break;
  case "spotify-this-song":
  	spotifyNow();
    break;
  case "movie-this":
    movieNow();
//     break;
// //   case do-what-it-says:
// //     //something here
// //     break;
// // default something:
}

// ------------------------------------------------------------------------------------

function twitterNow() {
                    var Twitter = require('twitter');

                     
                    var client = new Twitter({
                      		consumer_key: '',
                      		consumer_secret: '',
                      		access_token_key: '',
                      		access_token_secret: '',
                    });
                     
                    var params = {screen_name: 'PeterGuerrer0'};

                    client.get('statuses/user_timeline', params, function(error, tweets, response){	
                      if (!error) {
                        tweets.forEach(function(tweet){
                        	console.log(tweet.text)
                        	// console.log(tweet.id)
                        })
                      }
                    });

} 

// ------------------------------------------------------------------------------------

function spotifyNow(){
	var spotify = require("spotify");
	// // var song = process.argv[3];

	spotify.search({type: "track", query: process.argv[3]}, function(err, data) {
	
	    if(err) {
	        console.log('Error occurred: ' + err);
	        return;
	    } 
	    else {
	    	if(data.tracks.items.length > 0){
	    		console.log("Artist name: " + data.tracks.items[0].artists[0].name);
	    		console.log("Song: " + data.tracks.items[0].name);
	    		console.log("Link: " + data.tracks.items[0].external_urls.spotify);
	    		console.log("Album: " + data.tracks.items[0].album.name);
	    	}
	    }
	});	
}

// ------------------------------------------------------------------------------------

function movieNow() {

		var request = require('request');

		var movieName = process.argv[2];
		
		request('http://www.omdbapi.com/?t= '+ movieName +' &y=&plot=full&r&tomatoes=true&=json', function (error, response, body) {

			
			if (!error && response.statusCode == 200) {

				
				console.log("Movie title: " + JSON.parse(body)["Title"]);
				console.log("The movie's year is: " + JSON.parse(body)["Year"]);
				console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"]);
				console.log("Country: " + JSON.parse(body)["Country"]);
				console.log("Language: " + JSON.parse(body)["Language"]);
				console.log("Plot: " + JSON.parse(body)["Plot"]);
				console.log("Actors: " + JSON.parse(body)["Actors"]);
				console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
				console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
			}
		});


}






