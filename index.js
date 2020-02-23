/* var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080); */

$('#why-item-12').fadeOut();



$('#why-item-11').mouseover(function(){
    $('#why-item-12').fadeIn();
}).mouseout(function(){
    $('#why-item-12').fadeOut();
});




