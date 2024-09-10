var {LinkedList,Node} = require('../src/list');
var assert = require('assert');

var {expect} = require("chai");

describe('Linked List', function(){
     var list;


    beforeEach(function(){
        list = new LinkedList();
    })

    describe('When Empty', function(){

        it('should be empty intially',()=>{
        //    assert.equal(list.isEmpty(),true);
        expect(list.isEmpty()).to.be.equal(true);
        });
    
        it('should have size()=0 ',()=>{
            // var list = new LinkedList();
            expect(list.size()).to.equal(0);
        })

        it("Should have null on first Item", function(){
            
        })
    });

    describe('on append',function(){

        describe("in empty list", function(){

            it('should have size()=1',()=>{
                // var list=new LinkedList();
                list.append(1);
        
                expect(list.size()).to.equal(1);
            })
    
            it("Should add multiple values at once", () => {
                list.append(1,2,3,4);
                expect(list.size()).to.equal(4);
            })
    
    
            it("Should add the node as the first item", () => {
                var value = 1;
                list.append(value);
                expect(list._first.value).to.equal(value);
            })

            it("should add a node object", () =>{
                list.append(1);
                expect(list._first).to.be.an.instanceOf(Node);
            })
            

        
        })



    })

    describe("get", function(){
        var size;
        var data = [2,3,9,5,1]

        beforeEach(function(){
            list.append(...data);
            size = list.size()
        })

        it("should return valid value for all valid index", function(){
            for(var i = 0; i< data.length; i++){
                expect(list.get(i)).to.be.equal(data[i]);
            }
        })

    })
});