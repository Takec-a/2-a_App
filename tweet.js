const http = require('http');
const hostname = '192.168.0.101';
const port = 3000;

var server = http.createServer();
server.on('request', doRequest);

// リクエストの処理
function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World\n');
    var Twitter = require('twitter');

    var client = new Twitter({
    consumer_key:"KYfssu00jmzlvIvvHA3vJY5Mb",
    consumer_secret: "ON20Fnb9GMbyAQfhWClZBawIa20cMnUBGXppMPg081MFa2WWCd",
    access_token_key: "1276377376822145024-DXqB74JbafWtUgAaIctPlSZ4xWfP1J",
    access_token_secret: "J0JYGvizdNeJbYZQI29Sottp8awwyQl8uXvB40Fo0XUPF"
    });
    client.post('statuses/update', {status: "ツイttーddkoodt4thghgyトsも出t来るかな？"}, function(error, tweet, response){
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
