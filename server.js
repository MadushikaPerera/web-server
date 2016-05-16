var express = require('express');
var app = express();
var port = 3000;


var middleware={
  requireAuthentication: function (req,res,next) {
       console.log('Private route git!');
       next();
  },
  logger: function (req,res,next){
      console.log(req.method);
      next();
  }
};


 app.use(middleware.logger);

app.get('/aboutus',
middleware.requireAuthentication,function(req,res){
  res.send('About us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(port,function(){
  console.log('Express server started! at port:'+port);
});
