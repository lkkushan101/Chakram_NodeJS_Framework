'use strict';
var data = require('./data.json'),
    chakram = require('chakram'),
    expect = chakram.expect;
var PutRequest= function() {
this.callPutRequest = function(url,body_text) {
describe("PUT Request", function () {
  it("Should Assert The PUT Request", function () {
   var response = chakram.put(url, body_text);
    expect(response).to.have.status(200);
    return chakram.wait();
  });
 }); 
 };
};
module.exports = new PutRequest();
