// var searchInput='@realDonaldTrump';
var searchInput='@HillaryClinton';
var searchInput2='@realDonaldTrump';
//var searchInput='@ITP_NYU';
//var searchInput2='@nytimes';
var clinton_img, trump_img;
var user_at;
//var x,y,r;
var popular;
var rpx;
//var popularList = [];
// var c_popularList = [];
// var t_popularList = [];

popularList = {

    clinton : [],
    trump : [],

}



var textList = [];
var transp;
var par;
// var tweets;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15);
  loadJSON(/tweets/+searchInput, function(tweet){gotTweets(tweet,"clinton")});
  loadJSON(/tweets/+searchInput2, function(tweet){gotTweets(tweet,"trump")});

  clinton_img = createImg('https://pbs.twimg.com/profile_images/796243884636512260/zHVoWqKV_400x400.jpg');
  clinton_img.position(31, height/2-25);
  // clinton_img.style("width","50px";"border-radius","50%");
  clinton_img.class('avatar');


  trump_img= createImg('https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_400x400.jpg');
  trump_img.position(width-81, height/2-25);
  trump_img.class('avatar');
}

function draw() {
stroke(50);
line(width/2,0,width/2,height);
fill(0,0,255);
ellipse(56, height/2, 55,55);
fill(255,0,0);
ellipse(width-56, height/2,55,55);
}

function gotTweets(tweets, candidate) {
  // Just stick them in the window
  
  for (var i = 0; i < tweets.length; i++) {
    var currentRetweet = tweets[i].retweet_count;


    popularList[candidate][i] = currentRetweet;


  }
      //console.log(popularList);
      //console.log(candidate);


  //  for (var i = 0; i < tweets.length; i++) {
  //   var currenttext = tweets[i].text;
  //   textList[i] = currenttext;
  // }

  for (var i = 0; i < tweets.length; i++) {
    // fill(0);
    // noStroke();
    // textSize(12);
    // text(tweets[i].text,0,i*80)
    // text(tweets[i].created_at,0,i*80+10)
    // text(tweets[i].retweet_count,0,i*80+20)
    // var par = createP(tweets[i].text);
    // par.class('text');
    // console.log(tweets.length)
    // console.log(tweets[i].text)
    // console.log(tweets[i].retweet_count)
   // console.log(tweets[i].created_at)

    var x=width/2;
    var y=height/(tweets.length)*i+30;
    popular=tweets[i].retweet_count;
    var r = map(popular, min(popularList[candidate]), max(popularList[candidate]), 20, 50);
    transp=r*5+5;
    user_at=createImg(tweets[i].user.profile_image_url);
    // user_at.parent(imgholder);            
    rpx=r + 'px';
       // console.log(rpx)
    user_at.style("width",rpx);//rpx is var so dont use""
    

    
   //console.log(tweets[i].text)
   
  //       function change1() {
  // user_at.class('avatar2');
  // }

  // function change2() {
  // user_at.class('avatar3');
  // }
    if(candidate =="clinton"){
      fill(0,0,255,transp);
      stroke(0,0,255,transp);
      line(x,y,28,height/2);
      user_at.class('avatar2');
      user_at.position(x-r/2-10, y-r/2);
      
      console.log(text)
      user_at.id( candidate + i );
    //user_at.elt.val = ""+i;
      user_at.mouseOver(function(){
        //console.log(this);
        //var text = tweets[i].text
        var popContent = tweets[parseInt((this.elt.id).replace(candidate,""))].text;
        var popName = tweets[parseInt((this.elt.id).replace(candidate,""))].user.name;
        popuplayer1(popContent);
        popuplayer1_name(popName);
      });

      user_at.mouseOut(function(){
        //console.log(this);
        //var text = tweets[i].text
        var popContent = tweets[parseInt((this.elt.id).replace(candidate,""))].text;
        popuplayer3(popContent);
      });

  //      for (var i = 0; i < tweets.length; i++) {
  //   var currentRetweet = tweets[i].retweet_count;
  //   c_popularList[i] = currentRetweet;
  // }
      // user_at.mouseOver(change1);
      // user_at.mouseOut(change2);
      //par.position(x-r/2-10, y-r/2);


      // ellipse(x, y, r+5, r+5);  
    }
    else if(candidate =="trump"){
      y = y + height/(tweets.length) * 0.5;
      fill(255,0,0,transp);
     stroke(255,0,0,transp);
      line(x,y,width-56,height/2);
      user_at.class('avatar3');
      user_at.position(x-r/2+10, y-r/2);

      user_at.id( candidate + i );
    //user_at.elt.val = ""+i;
      user_at.mouseOver(function(){
        //console.log(this);
        //var text = tweets[i].text
        var popContent = tweets[parseInt((this.elt.id).replace(candidate,""))].text;
        var popName = tweets[parseInt((this.elt.id).replace(candidate,""))].user.name;
        popuplayer2(popContent);
        popuplayer2_name(popName);
      });
     //par.position(x-r/2+10, y-r/2);
 // for (var i = 0; i < tweets.length; i++) {
 //    var currentRetweet = tweets[i].retweet_count;
 //    t_popularList[i] = currentRetweet;
 //  }
      
      // ellipse(x, y, r+5, r+5);
    }


  }
      // console.log(c_popularList);
      //   console.log(t_popularList);
      // console.log(candidate);

      // p.style('background','#F660AB')
      // p.style('padding','16px');

  }

function popuplayer1(tweettext){

  par = createP(tweettext);
  par.class('text2');
  par.position(width/2-340, mouseY);

}

function popuplayer1_name(tweettext_name){

  par = createP(tweettext_name);
  par.class('text2_name');
  par.position(width/2-340, mouseY-8);

}

function popuplayer2(tweettext){

  par = createP(tweettext);
  par.class('text3');
  par.position(width/2+25, mouseY);
}

function popuplayer2_name(tweettext_name){

  par = createP(tweettext_name);
  par.class('text3_name');
  par.position(width/2+25, mouseY-8);

}

function popuplayer3(tweettext){

hide(par.id)
}

  function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
  }


