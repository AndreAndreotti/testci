const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

describe('Test that tests run', function(done) {
  it('should run a test', function(done) {
    expect(true).to.eql(false);
    done();
  });
});