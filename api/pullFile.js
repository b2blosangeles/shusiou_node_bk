var FOLDERP =  require(env.root_path + '/api/inc/folderP/folderP.js');
var folderP  = new FOLDERP ();
var base = '/var/video/';
folderP.build(base, function() {
  var http = require('http');
  var fs = require('fs');

  var file = fs.createWriteStream(base+'file.png');
  var request = http.get('http://api.shusiou.com/api/pipe_stream.js', function(response) {
        response.pipe(file);
        response.on('end', function() {
          res.sendFile(base + 'file.png');
         // res.send('niu');
        });
  });
//   res.send('niuB');
 // res.sendFile(base + 'file.png');
});
