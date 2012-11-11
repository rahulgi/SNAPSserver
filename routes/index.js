/*
var http = require('http');

var connectionInfo = {
    station_id: '3832850040487219575',
    station_secret: 'WZvjC3uvA4Xsn0aKtdKGc5tIjyc'
  };

function getPacket() {
  var options = {
    host: 'api.carpcomm.com:5051',
    path: '/GetLatestPackets',
  };
  
  http.get
}
*/
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'SNAPS Server', latestPacket: 'Hello World!' });
};
