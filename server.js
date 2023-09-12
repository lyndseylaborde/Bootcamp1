var http = require('http'), 
    fs = require('fs'), 
	url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
 //Investigate the request object
  if (url.parse(request.url).pathname == '/listing') {
	  response.writeHead(200, {'Content-Type': 'application/json'});
	  response.write(JSON.stringify(listingData));
  } else {
      //404 error
	  response.writeHead(404);
	  response.end('Bad gateway error - path');
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  //check for errors
   if(err){ 
        console.log(err) 
    } else {  
    } 
  
   listingData = JSON.parse(data); //Save the data in the listingData variable already defined

  server = http.createServer(requestHandler); //Creates the server
  server.listen(port, function() { //Start the server - once the server is listening, callback function is executes
  });
});
