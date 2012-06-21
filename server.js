var http = require('http');
var url = require("url");

//Starting Server
function start(route, handle){
 function onRequest(request, response){
  var postData = '';
   var pathname = url.parse(request.url).pathname;
  request.addListener("data",function(postDataChunk) {
   postData += postDataChunk;
   console.log("Chunk is "+postDataChunk);
//   route(handle,pathname,response,postDataChunk);
  });
  request.addListener("end", function() {
      route(handle, pathname, response, postData);
  });

 //route(handle,pathname,response);
 }
 http.createServer(onRequest).listen(1338);
 console.log("Server has been started");
}

exports.start = start;
