const {expect,should} = require('chai')
require('mocha')
const {PrimeRange,isPrimeSync} = require('../src/jahnavi')
should()
 
 
describe.only('primeRange', function(){
 
    let range;
    const expectedValues=[2,3,5,7];
 
    beforeEach(()=>{
        range=PrimeRange(0,10);
    });
 
    it('should match the expected values',()=>{
        //range.length.should.equal(expectedValues.length);
        for(var i=0; i<expectedValues.length; i++){
            range.next().value.should.equal(expectedValues[i]);
        }
    });  
   
    it('should be convertable to a regular list using spread',()=>{
        let range=PrimeRange(0,10);
        var results=[...range];
        results.should.deep.equal(expectedValues);
 
    });
 
    // it('should be convertable to a LinkedList using spread', ()=>{
    //     var list=new LinkedList(...range);
 
    //     list.size().should.equal(expectedValues.length);
    // })
 
    it('should skip the first n primes and return the remaining of the primes', () => {
        const skipLimit = 2;
        let range = PrimeRange(0, 10);
        for (let i = 0; i < skipLimit; i++) {
            range.next();
        }
        // range.next(skipLimit);
        const results = [...range];
        const expectedOutput = [5, 7];
 
        results.should.deep.equal(expectedOutput);
    });
 
 
 
 
 
});
