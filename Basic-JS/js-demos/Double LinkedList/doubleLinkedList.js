class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this._first = null;
        this._last = null;
        this._size = 0;
        this._currentIndex = undefined;
        this._current = null;
    }

    toString(){
        var str = ``
        for(var n = this._first;n ; n = n.next){
            str += `Each Value = ${n.data} \n`
        }
        return str

    }

    toStringOfEachNode(value){
        return `Each Value = ${value.data}`
    }
    

    append(...valueList){
        for(var value of valueList){
            this._append(value);
        }
    }

    _append(value){
        var newNode = new Node(value)
        if(!this._first){
            this._first = newNode;
            this._last =  newNode;
            this._size++
            return
        }else{
            this._last.next = newNode;
            newNode.prev = this._last;
            this._last = newNode;
        }
        this._size++;
    }

    _validate(index){
        if(typeof(index) !== 'number'){
            throw new Error("Invalid Index Type")
        }

        var temp = index
        if(index< 0){
            index = this._size + index;
        }
        if(index< 0 || index >= this._size){
            throw new Error(`Invalid Index: ${temp}`)
        }
        return index

    }


    _locate(index){
        index = this._validate(index)
        var current = this._first;
        var steps = index;
        var startIndex = 0;
        // console.log(current)
        if(this._current && this._currentIndex < index){
            startIndex = this._currentIndex;
            current = this._current;
            steps = index - this._currentIndex;
            for(var i = 0; i < steps; i++){
                current = current.next;
            }
        }
        else if(this._current && this._currentIndex > index){
           
            startIndex = this._currentIndex;
            current = this._current;
            steps =  this._currentIndex - index;
            for(var i = 0; i < steps; i++){
                current = current.prev;
            }

        }else{
            for(var i = 0; i < steps; i++){
                current = current.next;
            }
        }

        console.log(`locating from start=${startIndex}\tsteps=${steps}`);


        this._current = current;
        this._currentIndex = index;
        return current;
    }

    size(){
        return this._size;
    }

    get(index){
        return this._locate(index);
    }

    update(index,data){
        var currentNode = this._locate(index);
        currentNode.data = data
    }
    insert(index, data) {
        index = this._validate(index);

        var newNode = new Node(data);


        if (index === 0) {
            newNode.next = this._first;
            this._first = newNode;
        } else {
            var n = this._locate(index - 1);
            newNode.next = n.next;
            n.next.prev = newNode;
            n.next = newNode;
            newNode.prev = n;
        }
        this._size++;

    }

    remove(index){
        this._validate(index);
        var node = this._locate(index - 1);
        var removed = node.next.data
         node.next  =  node.next.next
         node.next.next.prev = node;
         this._size--;
         return removed ;
    }

}


try{
    module.exports.Node = Node;
    module.exports.DoubleLinkedList = DoubleLinkedList;
}
catch(e){

}