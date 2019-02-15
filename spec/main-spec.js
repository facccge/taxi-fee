const main = require('../main/main');
var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')
var expect = chai.expect;
chai.use(sinonChai);

describe('taxi fee', function () {
    it('return txai fee ( 0 < distance <= 2 km, waitTime = 0)',function(){
        let distance = 2;
        let waitTime = 0;
        let result = main(distance,waitTime);
        let expect_string = '6';
        expect(expect_string).to.equal(result);
    })
});
