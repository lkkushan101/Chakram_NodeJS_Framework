'use strict';
var data = require('./data.json'),
    chakram = require('chakram'),
    expect = chakram.expect;
var PostRequest= function() {
this.callPostRequest = function(url,body_text) {
describe("POST Request", function () {
  it("Should Assert The POST Request", function () {
   var response = chakram.post(url, body_text);
    expect(response).to.have.status(201);
    return chakram.wait();
  });
 }); 
 };
};
module.exports = new PostRequest();
