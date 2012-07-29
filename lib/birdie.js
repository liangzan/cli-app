var fs = require('fs')
  , twitter = require('ntwitter');

var twitterConfig = JSON.parse(fs.readFileSync('config/configuration.json', 'utf8'));
var twit = new twitter(twitterConfig);

var birdie = exports;

birdie.search = function(query, option, callback) {
  return twit.search(query, {result_type: option}, callback);
};
