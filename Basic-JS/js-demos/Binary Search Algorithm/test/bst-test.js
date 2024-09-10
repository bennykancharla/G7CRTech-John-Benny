
var {BinarySearchTree} = require("../src/bst");
var {expect,should} = require("chai");

should();
require("mocha");



describe("Binary Search Tree", ()=>{

        var bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);

 

    it("Should be Empty Initially",() =>{
        expect(bst.isEmpty()).to.be.false;
    })

    it("Should have a given value when inserted a value",()=>{
        // bst.insert(10);
        // console.log(bst.root.value)
        bst.root.value.should.be.equal(10)
    })

    it("Should have the given value on the left node when it is less than the root value", ()=>{

        // bst.insert(5);
        bst.root.left.value.should.be.equal(5);

    })
    it("Should have the given value on the right node when it is greater than the root value", ()=>{
        // bst.insert(15);
        
        // console.log(bst.root.right)
        bst.root.right.value.should.be.equal(15);

    })

    it("Should be true when we search for the item which is already there", () => {
        bst.search(bst.root,5).should.be.true
    })

    it("Should be able to traversal in pre-order", () => {
        var expectedResult = [10, 5, 3, 7, 15]

        bst.preOrder(bst.root).should.deep.equal(expectedResult)
    })
    it("Should be able to traversal in in-order", () => {
        var expectedResult = [3, 5, 7, 10, 15];
        bst.inOrder(bst.root).should.deep.equal(expectedResult)
    })
    it("Should be able to traversal in post-order", () => {
        var expectedResult = [3, 7, 5, 15, 10];
        bst.postOrder(bst.root).should.deep.equal(expectedResult)
    })





})