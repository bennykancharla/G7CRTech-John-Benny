import {createContext,useContext, useReducer} from 'react'
// import { InMemoryAuthorService } from '../services/in-memory-author.service';
import {  Book } from '../services/book';
import { ApiBooksService } from '../services/api-books.service';
import { action } from '../utils/action-creator';
import { useStatusContext } from './status.context';

let bookContext = createContext<any>(null);
export const useBookContext =()=>{
    return useContext(bookContext)!; //ensure context is not null
}

//store struct
// {
//     authors:[],
//     selectedAuthor:null
// }

//Actios:  AUTHOR_LIST, AUTHOR_SELECT, AUTHOR_ADD, AUTHOR_REMOVE, AUTHOR_UPDATE

interface BookStore{
    books:Book[],
    selectedBook: Book|null
}

const defaultStore:BookStore={
    books:[],
    selectedBook:null
}


const bookReducer=(bookStore:BookStore=defaultStore,action:any)=>{
    switch(action.type){
        case "BOOK_LIST":
            return {
                ...bookStore,
                books:action.payload
            }

        case "BOOK_SELECT":
            return {
                ...bookStore,
                selectedBook:action.payload
            }
        case "BOOK_REMOVE":
           return  {
                ...bookStore,
                books:bookStore.books.filter((a:any)=>a.id!==action.payload),
                selectedBook:null
            }

        case "BOOK_UPDATE":
    
            return {
                ...bookStore,
                books:bookStore.books.map((a:Book)=>a.id===action.payload.id?action.payload:a),
                selectedBook:action.payload
            }

        case "BOOK_ADD":
            return {
                ...bookStore,
                books:[...bookStore.books,action.payload],
                selectedBook:action.payload
            }
    }

}


export const BookProvider =({children}:any)=>{

    const service=new ApiBooksService();
    const [bookStore,dispatch]=useReducer(bookReducer,defaultStore);
    const {setStatus}=useStatusContext();

    const actions={
        getAllBooks: action(service.getAllBooks,dispatch,setStatus,"BOOK_LIST"),
        getBookById: action(service.getBookById,dispatch,setStatus,"BOOK_SELECT"),
    }


    return <bookContext.Provider value={{...actions,...bookStore}} >
        {children}
    </bookContext.Provider>

}

