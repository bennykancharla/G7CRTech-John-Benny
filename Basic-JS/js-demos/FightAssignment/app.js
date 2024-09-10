// var {Book,BookManager} =require('./book');


var app=(

    function(){
        
        var manager=new BookManager();

        var bookListContainer = document.getElementById("book-list-container");
        var bookTitleInput = document.getElementById("title")
        var bookAuthorInput = document.getElementById("author")
        var bookPriceInput = document.getElementById("price")
        var bookRatingInput = document.getElementById("rating")
        var bookCoverUrlInput = document.getElementById("cover-url");
        var searchInput = document.getElementById("searchBooks");

        manager.addBook(
            new Book('The Accursed God','Vivek Dutta Mishra',299, 4.5,"conver1.jpg"),
            new Book('Manas','Vivek Dutta Mishra',199, 4.4,"cover2.jpg"),
            new Book('Rashmirathi','Ramdhari Singh Dinkar',99, 4.1,"conver1.jpg"),
            new Book('Kane and Abel','Jeffrey Archer',599, 4.6,"conver2.jpg"),
        );


       
        // for(var i=0;i<manager._books.length();i++) {
        //     var book=manager._books.get(i);
        //     console.log(book.toString());
        // }

        // function nullAllInputs(){
          
        //     bookTitleInput.textContent= ""
        //     bookAuthorInput.textContent= ""
        //     bookPriceInput.textContent= ""
        //     bookRatingInput.textContent= ""
        //     bookCoverUrlInput.textContent= ""
        // }


        function initialization(){
            bookListContainer.innerHTML = "";
           
            for (let i = 1; i <= manager._books.length(); i++ ){
                let listItem = document.createElement("li");
                
                listItem.textContent  = manager.getBookById(i).title;

                listItem.addEventListener("click", () => fillIntoInputs(i));
                
                // console.log(manager.getBookById(i).id)
                bookListContainer.appendChild(listItem);
            }
            // console.log(newBook.getAll())
            // console.log(newBook.toString())
            // nullAllInputs();

        }
        function fillIntoInputs(id){
            // console.log(bookNode)
            var bookNode = manager.getBookById(id);
           bookTitleInput.value = bookNode.title;
           bookAuthorInput.value = bookNode.author;
           bookPriceInput.value = bookNode.price;
           bookRatingInput.value = bookNode.rating;
           bookCoverUrlInput.value = bookNode.coverUrl;

        }

        // console.log(manager.getAllBooks())

        function onAddBook(){
            manager.addBook(
                new Book (bookTitleInput.value,
                     bookAuthorInput.value, 
                     bookPriceInput.value,
                     bookRatingInput.value, 
                     bookCoverUrlInput.value 
                    )
            )
            initialization()
            
        }

        function onSave(){
            var newObj = {
                title:bookTitleInput.value,
                author:
                     bookAuthorInput.value, 
                     price:
                     bookPriceInput.value,
                     rating:
                     bookRatingInput.value,
                     coverUrl: 
                     bookCoverUrlInput.value 
            }
            console.log(manager._books.indexOf(newObj))
        }

        function onDelete(){
            var newObj = {
                title: bookTitleInput.value,
                author: bookAuthorInput.value, 
                     price: bookPriceInput.value,
                     rating: bookRatingInput.value,
                     coverUrl: bookCoverUrlInput.value 
            }
            console.log(manager._books.indexOf(newObj))
        }

        console.log(onDelete.prototype);

        return {
            initialization, 
            onAddBook,
            onSave,
            onDelete
        }
    }
)();

// console.log(app.initialization)