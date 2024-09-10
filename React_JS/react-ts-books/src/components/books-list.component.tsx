import React from 'react';


interface EachReviewObjectProps{
    name: string,
    title:string,
    details: string,
    rating: string,
    _id:string
  }
  
  
  interface EachBookObjectProps{
    _id?: string,
    isbn?:string,
    id?:string,
    title?:string,
    author?:string,
    pages?:string,
    rating?: string  ,
    votes?:string,
    description?: string,
    tags?: string[],
    series?:string,
    seriesIndex?:string,
    cover:string,
    reviews?: EachReviewObjectProps[],
    price?:string,
    authorId?:string
  }
  


interface BookListProps{
    books : EachBookObjectProps[],
    onBookSelect: (book: EachBookObjectProps) => void
}

export const BookList=(props:BookListProps )=>{

    


    return (
        <div className='list-group'>
            {props.books.map(book=>(
              <button key={book.id} 
              onClick={()=>props.onBookSelect(book)}
              className="list-group-item list-group-item-action"
              >{book.title}</button>
            ))}
        </div>
    )
}
