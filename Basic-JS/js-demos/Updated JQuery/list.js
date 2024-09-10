class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;

    }
}

class LinkedList {

    constructor(...values) {
        this._first = null;
        this._last = null;
        this._size = 0;
        this._currentIndex = undefined;
        this._current = null; //nothing located yet.


        // console.log('constructor', values);

        for (var value of values) {
            this._append(value);
        }



    }

    append(...values) {
        // console.log('append', values);

        for (var value of values) {
            this._append(value);
        }
        return this;
    }

    isEmpty() {
        return this._size === 0;
    }

    _append(value) {
        // var newNode = {
        //     value: value,
        //     next: null
        // };

        var newNode = new Node(value);

        if (this.isEmpty())
            this._first = newNode;
        else
            this._last.next = newNode;


        this._last = newNode;
        this._size++;
    }

    _validateIndex(index) {

        if (typeof index !== 'number')
            throw new TypeError('Index must be a number');

        if (index < 0)
            index += this._size;

        if (index < 0 || index >= this._size)
            throw new RangeError(`Index out of range: ${index}. valid range=(0-${this._size - 1})`);

        return index;
    }

    _locate(index) {
        index = this._validateIndex(index);

        //default case. start from begining
        var current = this._first;
        var startIndex = 0;
        var steps = index;

        if (this._current && this._currentIndex < index) {
            startIndex = this._currentIndex;
            current = this._current;
            steps = index - this._currentIndex;

        }

        // console.log(`locating from start=${startIndex}\tsteps=${steps}`);

        for (var i = 0; i < steps; i++) {
            
            current = current.next;
        }


        this._current = current;
        this._currentIndex = index;
        return current;
    }

    size() {
        return this._size;
    }

    get(index) {
        return this._locate(index).value;
    }

    set(index, value) {
        this._locate(index).value = value;
        return this;
    }

    insert(index, value) {
        index = this._validateIndex(index);

        var newNode = new Node(value);


        if (index === 0) {
            newNode.next = this._first;
            this._first = newNode;
        } else {
            var n = this._locate(index - 1);
            newNode.next = n.next;
            n.next = newNode;
        }
        this._size++;
        return this;
    }
// //////////////////////////////////////
    indexOf(item){
        var i=0;
        for(var n=this._first; n; n = n.next){
            if(n.value === item)
                return i;
            i++;
        }

        return -1;
        
    }
//////////////////////////////////////
    // remove(index) {
    //     this._validateIndex(index);
    //     var p = this._locate(index -1 );
    //     console.log('p', p);

    //     //now remove p.next
    //    var temp = p.next;
    //     p.value = temp;
    //     // p.next = p.next.next;
    //     // console.log(p)

    //     return p.value;

    // }


    // /////////////////////////////////
    
    remove(index) {

        if(index===0 && this._size>0){
            var d= this._first.value;
            this._first=this._first.next;
            this._size--;
            return d;
        }

        //for all other nodes
        this._validateIndex(index);
        var p = this._locate(index - 1);
       
        var delValue=p.next.value;
        p.next = p.next.next;
        this._size--;
        return delValue;

    }


    //////////////////////////////////

    // remove(params,iterator){
    //     // console.log(params)
    //     if(typeof(params) === 'function'){
    //         return this._removeByMatcher(params,iterator)
    //     }
    //     else{
    //         this._validateIndex(params);
    //             var p = this._locate(params - 1 );
    //             // console.log('p', p);
        
    //             //now remove p.next
    //         //    var temp = p.next;
    //         //     p.value = temp;
    //             p.next = p.next.next;
    //             // console.log(p)
        
    //             return p.value;
    //     }
    // }

    // _removeByMatcher(matcher, limit) {
    //     let count = 0;
    //     let current = this._first;
    //     let lastNode = null;
    //     // console.log(current)
    //     while (current && count < limit) {
    //         if (matcher(current.value)) {
    //             if (lastNode === null) {
    //                 this._first = current.next;
    //                 current = this._first;
    //             } else {
    //                 lastNode.next = current.next;
    //                 current = lastNode.next
    //             }
    //             // console.log(current)
    //             count++;
               
    //         } else {
    //             lastNode = current;
    //             current = current.next;
    //         }
    //     }
    
    //     return this._first;
    // }
    

    toString() {
        var str = "LinkedList(\t";
        for (var n = this._first; n; n = n.next) {
            str += n.value + "\t";
        }

        return str + ")";
    }

    forEach(execute) {
        var i = 0;
        for (var n = this._first; n; n = n.next) {
            var result = execute(n.value, i);
            // console.log(n.value)
            if (result !== undefined)
                return result;
            i++;

        }
    }

    filter(matcher) {
        var result = new LinkedList();

        this.forEach(v => {
            if (matcher(v)) {
                result.append(v);
            }
        });

        return result;
    }

    find(matcher) {
        for (var n = this._first; n != null; n = n.next) {
            if (matcher(n.value)) {
                return n.value;
            }
        }
    }

    map(mapper) {
        var result = new LinkedList();

        this.forEach(v => {
            result.append(mapper(v));
        });

        return result;
    }
    reduce(reducer, startValue) {
        let accumulator = startValue;
        let current = this._first;
        while (current !== null) {
            accumulator = reducer(accumulator, current.value);
            current = current.next;
        }
        return accumulator;
    }

    onAverage(sum){
        return this.reduce(sum,0)/this.size();
    }

}

// var newObj = {id:2};
// console.log(newObj);
// console.log(newObj.valueOf().call);

try {
    module.exports.LinkedList = LinkedList;
    module.exports.Node = Node;
} catch (e) {

}