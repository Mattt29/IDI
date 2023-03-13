var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

var data = ["test"];

app.get("/formulaire", function(req,res){
    res.send(file="page.html")
    }
);

app.get("/toto", function(req,res){
    res.send("ceci est un test de toto")
    }
);

app.listen(port, function(){
    console.log('serveur listening on port : '+port);
    }
);