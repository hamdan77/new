var http = require('http');

var server = http.createServer(function(req,res){
                    res.writeHead(200, {'Content-Type' : 'text/html'}) ;          res.end('
<html lang="en">+


    <h1> What is Heroku?  </h1>
+    
<p> Heroku is a cloud Platform-as-a-Service (PaaS)  Heroku was acquired by Salesforce.com in 2010. It supports programming languages like<b> Java, Node.js, Scala, Clojure, Python,  PHP</b>. </p>
');
                               
                               });



var port = Number(process.env.PORT || 3000);
server.listen(port);