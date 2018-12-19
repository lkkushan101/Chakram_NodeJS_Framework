'use strict';
var data = require('./data.json'),
    chakram = require('chakram'),
    expect = chakram.expect;
var GetRequest= function() {
this.callGetRequest = function(url) {
describe("GET Request", function () {
  it("Should Assert The Get Request", function () {
   var response = chakram.get(url);
    expect(response).to.have.status(200);
    return chakram.wait();
  });
 }); 
 };
};
module.exports = new GetRequest();
