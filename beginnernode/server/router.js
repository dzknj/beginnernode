// function route(handle, pathname, response) {
//   console.log('about to rout request for ' + pathname);
//   if(typeof handle[pathname] === 'function') {
//     handle[pathname](response);
//   } else {
//     console.log('no request handler found for ' + pathname);
//     response.writeHead(404, {'Content-Type': 'text/plain'});
//     response.write('404 not found');
//     response.end();
//   }
// }
// exports.route = route;

// function route(handle, pathname, response, postData) {
//   console.log('about to route request for ' + pathname);
//   if(typeof handle[pathname] === 'function') {
//     handle[pathname](response, postData);
//   } else {
//     console.log('no request handler found for ' + pathname);
//     response.writeHead(404, {'Content-Type': 'text/plain'});
//     response.write('404 not found');
//     response.end();
//   };
// };
// exports.route = route;

function route(handle, pathname, response, request) {
  console.log('about to route request for ' + pathname);
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log('no request handler found for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 not found');
    response.end();
  };
};
exports.route = route;
