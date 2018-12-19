'use strict';
var data = require('./data.json'),
    chakram = require('chakram'),
    expect = chakram.expect;
var DeleteRequest = function() {
this.callDeleteRequest = function(url) {
describe("Delete Request", function () {
  it("Should Assert The Delete Request", function () {
   var response = chakram.delete(url);
    expect(response).to.have.status(204);
    return chakram.wait();
  });
 }); 
 };
};
module.exports = new DeleteRequest();