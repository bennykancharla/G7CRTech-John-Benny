class BookNode{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }   
}


class Book{
    constructor(){
        this.first = null;
    }

    append(item){
        var newNode = new BookNode(item);
        if(this.first === null){
            this.first = newNode;
            return;
        }

        var n = this.first;
        while(n.next){
            n = n.next;
        }

        n.next = newNode;
    }

    toString(){
        var str="BookList:\n";
        for(var n=this.first; n ;  n=n.next){
            str+=`ID: ${n.data.id}, Title:${n.data.title}, Author:${n.data.author},Cover URL: ${n.data.coverUrl}, Price: ${n.data.price}, Rating:${n.data.rating}\n`
        }
        return str;
    }

    findByAuthor(authorName){
        
        var listOfBooks = [];

        for(var n = this.first; n ; n = n.next){
            if(n.data.author === authorName){
                listOfBooks.push(n.data);
            }
        }

        if(listOfBooks.length === 0){
            return -1;
        }
        return listOfBooks;
    }

    findByPrice(startRange,endRange){
        startRange = parseInt(startRange);
        endRange = parseInt(endRange);
        var listOfBooksByPrice = []

        for (var n = this.first; n ; n = n.next){
            if(n.data.price >= startRange && n.data.price < endRange){
                listOfBooksByPrice.push(n.data)
            }
        }
        if(listOfBooksByPrice.length === 0){
            return -1;
        }
        return listOfBooksByPrice
    }

    delete(id){
        if(this.first === null){
            throw new Error(`Empty Class Book`)
        }
       
        for( var n = this.first; n ; n = n.next ){
           
            if(id === 1){
                this.first = this.first.next 
                break
            }
            else if(n.next.data.id === id && n.next){
                n.next = n.next.next;
                break
            }
        }
    }
    update(id,newObject){
       var isEmpty = true;
        for( var n = this.first; n ; n = n.next){
            if(n.data.id === id){
                n.data = newObject;
                isEmpty = false
                break
            }
        }
        if(isEmpty){
            throw new Error(`Invaid ID ${id}. ID not present in the Class`);
        }
    }
    getAll(){
        var allBooks = []
        for(var n = this.first;n ; n = n.next){
            allBooks.push(n.data);
        }
        return allBooks;

    }

}

console.log(function(){}.prototype)


try{
    module.exports.BookNode=BookNode;
    module.exports.Book=Book;
}catch(e){

}