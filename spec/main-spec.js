const main = require('../main/main');
var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')
var expect = chai.expect;
chai.use(sinonChai);

describe('taxi fee', function () {
    it('return txai fee ( 0 <= distance <= 2 km, waitTime = 0)',function(){
        let distance = 2;
        let waitTime = 0;
        let result = main(distance,waitTime);
        let expect_string = '6';
        expect(expect_string).to.equal(result);
    })
    it('return txai fee ( 0 <= distance <= 2 km, waitTime = 5)',function(){
        let distance = 2;
        let waitTime = 5;
        let result = main(distance,waitTime);
        let expect_string = '7';
        expect(expect_string).to.equal(result);
    })
    it('return txai fee (2 km < distance <= 8 km, waitTime = 0)',function(){
        let distance = 8;
        let waitTime = 0;
        let result = main(distance,waitTime);
        let expect_string = '11';
        expect(expect_string).to.equal(result);
    })
    it('return txai fee (2 km < distance <= 8 km, waitTime = 7)',function(){
        let distance = 8;
        let waitTime = 7;
        let result = main(distance,waitTime);
        let expect_string = '13';
        expect(expect_string).to.equal(result);
    })
    it('return txai fee (distance > 8 km, waitTime = 0)',function(){
        let distance = 13;
        let waitTime = 0;
        let result = main(distance,waitTime);
        let expect_string = '17';
        expect(expect_string).to.equal(result);
    })
    it('return txai fee (distance > 8 km, waitTime = 9)',function(){
        let distance = 13;
        let waitTime = 9;
        let result = main(distance,waitTime);
        let expect_string = '19';
        expect(expect_string).to.equal(result);
    })
});
