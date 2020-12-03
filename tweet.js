const http = require('http');
const hostname = '192.168.0.101';
const port = 3000;

var server = http.createServer();
server.on('request', doRequest);

// リクエストの処理
function doRequest(req, res) {
    var Twitter = require('twitter');

    var client = new Twitter({
    consumer_key:"",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: ""
    });
    client.post('statuses/update', {status: "testツイートです。アプリによって遅刻が検知されました。"}, function(error, tweet, response){
      if (!error) {
          console.log(tweet);

      } else {
          console.log('erroiir');
      }
    });

    res.end();
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
