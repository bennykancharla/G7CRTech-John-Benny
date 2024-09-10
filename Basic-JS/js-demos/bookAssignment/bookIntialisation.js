// var {Book} = require("./bookClass");



// console.log(newBook.findByAuthor("James Clear"));

// console.log(newBook.findByPrice(100,2000))

// console.log(newBook.toString())

// newBook.delete(3);
// newInput = {
    // "id": 6,
    // "title":"The Power of your Sub-Consious Mind",
    // "author": "Joseph Murphy",
    // "coverUrl":"powerofsubconsiousmind.jpg",
    // "price":450,
    // "rating" : 4
    // }
    
    // newBook.update(1,newInput)
    
    
// console.log(newBook.toString())

var bookObject =[ {
    "id": 1,
    "title":"Manas",
    "author": "Vivek Dutta Mishra",
    "coverUrl": "manas.jpg",
    "price":500,
    "rating" : 3
},
{
    "id": 2,
    "title":"Atomic Habits",
    "author": "James Clear",
    "coverUrl":"atomichabits.jpg",
    "price":600,
    "rating" : 5
},
{
    "id": 3,
    "title":"Deep Work",
    "author": "Carl Newport",
    "coverUrl": "deepwork.jpg",
    "price":500,
    "rating" : 4
},
{
    "id": 4,
    "title":"Indistractable",
    "author": "Nir Eyal",
    "coverUrl":"indistractable.jpg",
    "price":300,
    "rating" : 4
}
,
{
    "id": 5,
    "title":"The Power of your Sub-Consious Mind",
    "author": "Joseph Murphy",
    "coverUrl":"powerofsubconsiousmind.jpg",
    "price":450,
    "rating" : 4
}


]



var app = (function (){
    var bookListContainer = document.getElementById("book-list-container");
    var bookIdInput = document.getElementById("id")
    var bookTitleInput = document.getElementById("title")
    var bookAuthorInput = document.getElementById("author")
    var bookPriceInput = document.getElementById("price")
    var bookRatingInput = document.getElementById("rating")
    var bookCoverUrlInput = document.getElementById("cover-url");

    var newBook = new Book();
    bookObject.map((each) => 
        newBook.append(each)
    );
    function nullAllInputs(){
        bookIdInput.textContent= ""
        bookTitleInput.textContent= ""
        bookAuthorInput.textContent= ""
        bookPriceInput.textContent= ""
        bookRatingInput.textContent= ""
        bookCoverUrlInput.textContent= ""
    }

    function initialization(){
        bookListContainer.innerHTML = "";
       
        for (let i of newBook.getAll() ){
            var listItem = document.createElement("li");
            listItem.textContent  = i.title;
            // console.log(i.title)
            bookListContainer.appendChild(listItem);
        }
        // console.log(newBook.getAll())
        // console.log(newBook.toString())
        nullAllInputs();
    }

    function onSave(event){
        // event.preventDefault();
        // console.log("Clicked")
        const newBookInput = {
            "id": bookIdInput.value,
            "title":bookTitleInput.value,
            "author": bookAuthorInput.value,
            "coverUrl" :bookCoverUrlInput.value,
            "price":bookPriceInput.value,
            "rating": bookRatingInput.value
        }
        newBook.append(newBookInput);
        initialization();
       
        // console.log(newBook.toString());

    }

    return {initialization,onSave}

})();


