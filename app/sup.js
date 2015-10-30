#!/usr/bin/env node
var dash_button = require("node-dash-button"),
    Twitter = require('twit');

var button_ids = process.env.BUTTON_IDS.split(","),
    dash = dash_button(button_ids),
    followers;

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function random_follower() {
  var index = Math.floor(Math.random() * followers.length);
  return followers[index];
}

client.get('followers/ids', { screen_name: 'supbutton' }, function (err, data, response) {
  if(err) throw err;
  console.log("Loaded followers.");
  followers = data.ids;
});

dash.on("detected", function (dash_id) {
  console.log("sup");
  client.get("users/show", { user_id: random_follower() }, function(err, data, response) {
    if(err) throw err;
    var name = data.screen_name,
        tweet = "@" + name + " Sup";

    client.post('statuses/update', { status: tweet }, function(err, data, response) {
      if(err) console.log(err);
    });
  });
});

console.log("Waiting for sup button...");
