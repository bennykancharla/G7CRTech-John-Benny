var {assertEquals,assertTrue,assertNull} = require("../src/asserts")
var {it} = require("node:test");
var {plus,minus,multiply,divide} = require('../src/simple-math');

var assert = require('assert');

// console.log(plus)
var x = 10;
var y = 5;

it("Plus Test", function(){
    var result = plus(x,y);
    // console.log("Inside Function")
    console.log("Expected , Actual", x+y, result)
    assert.equal(x+y,result)
})

it("Minus Test", function(){
    var result = minus(x,y);
    // console.log("Inside Function")
    assert.equal(x-y,result)
})

it("Multiply Test", function(){
    var result = multiply(x,y);
    // console.log("Inside Function")
    assert.equal(x*y,result)
})

it("Divide Test", function(){
    var result = divide(x,y);
    // console.log("Inside Function")
    assert.equal(x/y,result)
})

it("Null Test", function(){
    var result = null;
    assertNull(result);
})