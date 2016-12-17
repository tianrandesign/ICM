console.log('the bot is starting') ;
var Twit=require('twit');
var config=require('./config')
console.log(config)
var T = new Twit(config);

var params={ 
	q: 'banana since:2011-07-11', 
	count: 2 
} 

T.get('search/tweets', params,gotData);
	 

function gotData(err, data, response) {
	var tweets=data.statuses;
	for (var i=0; i<tweets.length;i++){
		console.log(tweets[i].text);
	}
  //console.log(data);
};
