import { delay } from "../utils/delay";
import { Book } from "./book";
import axios from "axios";

const url='http://localhost:8000/api/books';

export class ApiBooksService{
    
    

    getAllBooks=async ()=>{
        const data = await axios.get(url);
        return data.data;
    }

    getBookById=async (id?:string)=>{
        
        var authors=await this.getAllBooks();
        var result= authors.find((author:Book)=>author.id===id);
        if(result)
            return result;
        else
            throw new Error(`Invalid Author Id ${id}`);
    }

    addBook=async(author:Book)=>{
      
    }

    removeBook=async(id:string)=>{
       
    }

    updateBook=async (id:string,author:Book)=>{
        
    }
}