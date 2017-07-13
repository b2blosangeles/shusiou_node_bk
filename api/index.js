function getServerIP() {
    var ifaces = require('os').networkInterfaces(), address=[];
    for (var dev in ifaces) {
        var v =  ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false);
        for (var i=0; i < v.length; i++) address[address.length] = v[i].address;
    }
    return address;
};

require('child_process').exec('df -h', function(err, resp) 
{ res.send(resp); }); 

return true;

pkg.request({
    url: 'http://api.shusiou.com/api/test_mysql.js',
    method: "POST",
    headers: {
        "content-type": "application/json",
        },
    json: {ip:getServerIP()}
    }, function (error, resp, body) { 
      res.send(body);
   });


