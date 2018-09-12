const http = require('http')
var Router = require('./route')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  // console.dir(req, { color: true, depth: 0 })
  //
  // req.url
  // req.headers
  // req.method


  /* var body = '';
  res.writeHead(200, {
    'Context-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
});

req.on('data', function (chunk) {
    body += chunk;
});

req.on('end', function() {
    fs.writeFile('file.json', body, 'utf8');
    res.end('{"msg": "OK"}');
})
 */

 //var reqUrl=url.parse(req.url);
 //console.dir(reqUrl);

  route.dispatch(req, res)
})

var route = new Router(function onNotFound (req, res) {
  res.statusCode = 404
  res.statusMessage = http.STATUS_CODES[404]
  res.setHeader('Content-Type', 'text/plain')
  res.end(http.STATUS_CODES[404] + '\n')
})

route.get('/time', function (req, res) {
  res.statusCode = 200
  res.statusMessage = http.STATUS_CODES[200]
  res.setHeader('Content-Type', 'text/plain')
  res.end(new Date().toISOString() + '\n')



  
})

route.get('/name', function (req, res) {
  res.statusCode = 202
  res.statusMessage = http.STATUS_CODES[202]
  res.setHeader('Content-Type', 'text/html')
  
 // res.write(`<html><head><title>Home URL></titlle></head><body>
  //Home URL :https://en.wikipedia.org/wiki/George_Dantzig?Click
  // <a href='/'>here</a></body></html>`)
res.write(`<html><h1>My name is localhost:8080</h1><a href='/GetPost'>Click Me</a><br></html>`)
res.write(`<html><h1>My name is localhost:8080</h1><a href='https://en.wikipedia.org/wiki/George_Dantzig'>Click Me</a></html>`)

// res.end(`<html><h1>My name is localhost:8080</h1><a href='/GetPost/https://en.wikipedia.org/wiki/George_Dantzig'>Click Me</a></html>`)


  res.end()

})


route.post('/GetPost',(req,res)=>{
  res.statusCode = 201
  res.statusMessage = http.STATUS_CODES[201]
  res.setHeader('Content-type', 'application/x-www-form-urlencoded')

  res.end(`${res.statusCode}`)
})



// PORT > 1024
server.listen(8080)