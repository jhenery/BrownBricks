var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
app.use(express.urlencoded());
app.post('/contact-form-handler.php', (req, res) => {
  const info = req.body.info;
  const discord = req.body.discord;
  const email = req.body.email;
  const message = req.body.message;
  console.log("email sent!");
  res.end()
})
//Static files

const https = require('https');
const httpProxy = require('http-proxy');
const fs = require("fs");

var proxy = httpProxy.createProxyServer();

var server = https.createServer(
  {
    key: fs.readFileSync('private'),//This is the private key
    cert: fs.readFileSync('certificate'), //This is the certificate (public key)
  }, function (req, res) {
    console.log("Proxying to 8080");
    proxy.web(req, res, {
      target: 'http://134.209.47.57:3000',
    }
    );
  });


console.log("listening on port 443")
server.listen(443);