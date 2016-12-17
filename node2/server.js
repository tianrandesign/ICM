var express = require('express');
// Create the app
var app = express();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

// This is for hosting files
// Anything in the public directory will be served
// This is just like python -m SimpleHTTPServer
// We could also add routes, but aren't doing so here
app.use(express.static('public'));

// Create an Twitter object to connect to Twitter API
// npm install twit
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');
// Making a Twit object for connection to the API
var T = new Twit(config);

// This route searches twitter
app.get('/tweets/:query', getTweets);

// Callback
function getTweets(req, res) {
  // Here's the string we are seraching for
  var query = req.params.query;

  // Execute a Twitter API call
 T.get('search/tweets', { q: query, count: 100,result_type:'popular' }, gotData);
 //T.get('search/tweets', { q: query, count: 100 }, gotData);
  // Callback
  function gotData(err, data) {
    // Get the tweets
    var tweets = data.statuses;
    // Spit it back out so that p5 can load it!
    res.send(tweets);
  };
}

// var twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY || ''
//   , twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET || ''
//   , twitterAccessTokenKey = process.env.TWITTER_ACCESS_TOKEN_KEY || ''
//   , twitterAccessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
//   , twitterClient = new Twitter({
//   consumer_key: config.consumer_key,
//   consumer_secret: config.consumer_secret,
//   access_token_key: config.access_token_key,
//   access_token_secret: config.access_token_secret})



// T.get('search/tweets', params,gotData);
	 

// function gotData(err, data, response) {
// 	var tweets=data.statuses;
// 	for (var i=0; i<tweets.length;i++){
// 		console.log(tweets[i].text);
// 	}
//   //console.log(data);
// };
