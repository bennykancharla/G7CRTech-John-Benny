//var BookManager= require('./book-manager');

//const { BookManager } = require("./book-manager");


var app=(function(){

    // var manager=new BookManager();
     var bookList=document.getElementById('book-list');
     var bookEditor=document.getElementById('book-editor');
     var searchBox=document.getElementById('search-box');
 
     var searchCriteriaDropDown= document.getElementById("search-criteria");
    var searchInput=document.getElementById("search-input"); 
     var searchButton=document.getElementById("search-button");
 
     var minMaxDiv=document.getElementById("min-max-div");
 
     var searchCriteria="";
 
     var bookManager=new BookManager();
 
 
     var createSingleInput=()=>{
        // console.log(handler)
        var selectorType = searchCriteriaDropDown.value;
        // console.log(selectorType)
        // var selectHandler = searchOptions[selectorType].handler;
    //    console.log(selectHandler)
        return `<input type='text' id='q' onchange='app.onChangeInputEle(event)' placeholder='Search ${selectorType}'/>`
     };

     function onChangeInputEle(event){
        var selectorType = searchCriteriaDropDown.value;
        var searchText = event.target.value;
        // console.log(searchText);
        var selectHandler = searchOptions[selectorType].handler; 
        if(selectHandler){
            var books = selectHandler(searchText);
            if(books){
                refreshBookList(books);
            }
        }
    }
     
     function createRangeInputBuilder(label,min, max){
         let _max='';
         if(max){
             _max=`max="${max}"`;
         }
 
         let _min='';
         if(min!==undefined){
             _min=`min="${min}"`;
         }
         
         function generateUi(){
             return `
             <input type='number' id='min' placeholder='min ${label}' ${_min} ${_max} />
             <input type='number' id='max' placeholder='max ${label}' ${_min} ${_max} />
         `
         }
 
         return generateUi;
     }
 
 
     var searchOptions={
         _id: {
             builder: createSingleInput,
             handler: function(){
                 var id= $("#q").int();
                 var book =  bookManager.getBookById(id);
                 toEditor(book);    
             },
             label:"Id"
 
         },
         title: {
            builder: createSingleInput,
            handler: function(){
                var title = $("#q").val();
                return bookManager.getBooksByTitle(title);
            },
            label: "Title"
         },
         author:{
            builder: createSingleInput,
            handler:function(){
                var author= $("#q").val();
                return bookManager.getBooksByAuthor(author)},
                label: "Author"
            },
         price:{
             builder: createRangeInputBuilder("price",0),
             handler: function(){
                 var min= $("#min").val();
                 var max= $("#max").val();
                 return bookManager.getBooksByPriceRange(min, max);
             },
             label:"Price Range"
         },
         rating:{
            builder:  createRangeInputBuilder("rating",1,5),
            handler: function(){
                var min=$("#min").val();
                var max=$("#max").val();
                return bookManager.getBooksByRatingRange(min,max);
                
            },
            label: "Rating Range"
         }
     }
 
     function buildSearchUI(event){
         // step #1 add values in the combo box
         buildSearchUIDropdown()
        
         // step #2 select the selectedType in combo box
        
  
         // step #3 generate the ui for the selected type
     }

     function buildSearchUIDropdown(){
       
        var searchUIOptions = ``;
        for(let eachOption in searchOptions){
            // console.log(eachOption)
            searchUIOptions += `<option value="${eachOption}"> ${searchOptions[eachOption].label} </options>`
        }
        // console.log(typeof(searchUIOptions))
        searchCriteriaDropDown.innerHTML = searchUIOptions;
       
     }
 
 
    //  var searchUiBuilder={
    //      _id: createSingleInput,
    //      author: createSingleInput,
    //      price:createRangeInputBuilder("price",0),
    //      rating: createRangeInputBuilder("rating",1,5),
    //  }
 
    //  var searchHandlers={
    //      _id: function(){
    //          var id= $("#q").int();
    //          var book= bookManager.getBookById(id);
    //          toEditor(book);
    //      },
    //      author:function(){
    //          var author= $("#q").val();
    //          return bookManager.getBooksByAuthor(author);
    //      },
    //      price:function(){
    //          var min= $("#min").val();
    //          var max= $("#max").val();
    //          return bookManager.getBooksByPriceRange(min, max);
    //      },
    //      rating:function(){
    //          var min=$("#min").val();
    //          var max=$("#max").val();
    //          return bookManager.getBooksByRatingRange(min,max);
             
    //      }
    //  }
 
 
     var handleSearchTypeSelection=function(event){
         searchCriteria=event.target.value;
         displaySearchUi(searchCriteria);
     }
 
     function displaySearchUi(searchCriteria){
         if(searchOptions[searchCriteria]){
             var ui= searchOptions[searchCriteria].builder;
            //  console.log(searchOptions[searchCriteria])
             var html= ui();
             $("#search-parameters").html(html);
         }
     }
 
 
 
     var handleSearch=function(){
         let searchType = $("#search-criteria").val();
         
         var searchHandler= searchOptions[searchType].handler;
        // console.log(searchOptions[searchType].handler)
         if(searchHandler){
             var books=searchHandler();
            //  console.log(books)
             if(books)
                 refreshBookList(books);
         }
         
     }
 
   
     
 
     function toEditor(book){
         $("#book-editor-title").html(book.title? book.title: "New Book");
         $("#book-title").val(book.title);
         $("#book-author").val(book.author);
         $("#book-price").val(book.price);
         $("#book-rating").val(book.rating);
         $("#book-id").val(book._id);
         $("#book-cover").val(book.cover);
 
         $("#book-cover-image").src(book.cover);
 
     }
 
     function fromEditor(){
         var book= new Book(
            
             $("#book-title").val(),
             $("#book-author").val(),
             $("#book-price").val(),
             $("#book-rating").val(),
             $("#book-cover").val()
         )
         book._id=$("#book-id").val();
         return book;
     }
 
     function refreshBookList(books){
         var items='';
        //  console.log(books)
         books.forEach(book=>{
             items+=`<li onclick='app.handleBookSelect(${book._id})' class='book_title'>${book.title}</li>`;
         });
        // $("h1").highlight({color:'red',background:'transparent'});
         bookList.innerHTML=items;
         
     }
 
 
     var init=function(){
         //createSearchInputBoxes('_id');
         displaySearchUi('_id');
         buildSearchUI()
         var books=bookManager.getBooks();
        //  console.log(books._first)
         refreshBookList(books);
         handleAddBook();
        //  console.log(bookManager.getAverageRating());
        //  console.log(bookManager.getAveragePrice());
        // var newObj = {id:2};
        // console.log(newObj);
        // console.log(newObj.toString());
     }
 
     var handleBookSelect=function(bookId){
         var book=bookManager.getBookById(bookId);
         toEditor(book);
         
     }
 
     var handleAddBook=function(){
         toEditor({title:"",author:"",price:"",cover:"",rating:"",id:""});
     }
 
     var handleSave=function(){
         var book=fromEditor();
         if(book._id){
             console.log('updating',book);
             bookManager.updateBook(book);
         } else{
             console.log('adding',book);
             bookManager.addBook(book);
             refreshBookList(bookManager.getBooks());
         }
         
     }
 
     var handleDelete=function(){
         var bookId=$("#book-id").int();
         console.log('remove',bookId);
         
         bookManager.removeBook(bookId);
         refreshBookList(bookManager.getBooks());
     }
 
 
 
    
 
     
 
     return {
         init,
         handleBookSelect,
         handleAddBook,
         handleSave,
         handleDelete,
         handleSearch,
         handleSearchTypeSelection,
         buildSearchUI,
         onChangeInputEle
     };
 
 })();