function route(handle, pathname, response, postDataChunk){
 //console.log("About to route a request for "+pathname);
 if (typeof handle[pathname] === 'function') {
  handle[pathname](response,postDataChunk);
 }else{
  console.log("No request handler found for "+pathname);
  response.writeHead(404, {"Content-Type":"text/plain"});
  response.write("404 NOT FOUND !");
  response.end();
 }
}

exports.route = route;
