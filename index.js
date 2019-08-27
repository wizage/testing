var AWS = require('aws-sdk');
var rdsdataservice = new AWS.RDSDataService({apiVersion: '2018-08-01'});

console.log(AWS.VERSION);

console.log(rdsdataservice);