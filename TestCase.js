var data = require('./Data.json');
var post = require('./PostRequest.js');
var get = require('./GetRequest.js');
var del = require('./DeleteRequest.js');
var put = require('./PutRequest.js');
post.callPostRequest(data.Request_Post,{ "email": data.email, "password": data.password });
get.callGetRequest(data.Request_Get);
del.callDeleteRequest(data.Request_Delete);
put.callPutRequest(data.Request_Put,{ "name": data.name, "job" : data.name });
