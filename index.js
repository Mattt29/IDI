var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

var data = ["test"];

app.get("/form", function(req,res){
    res.sendFile('C:/Users/matth/Desktop/Cours/Paul Va/MIASHS/Master/S2/IntegrationDonneesIntegrees/IDI/page.html')
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