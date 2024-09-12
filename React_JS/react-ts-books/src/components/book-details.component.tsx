import React from 'react';
import { withVisibility } from '../hocs/with-visibility';

interface BookDetailsProps{
    book?: any,
    onBookDelete?: (id:string)=>void;
}

let _BookDetails=({book,onBookDelete: onBookDelete}:BookDetailsProps)=>{

    if(!book)
        return <h2>Select An Book</h2>

    return (
        <div>
           <h2>{book.title}</h2>
           {
            onBookDelete &&
            <button
                onClick={()=>onBookDelete(book.id)}
                className='btn btn-danger'
            >Delete</button>
           }
        </div>
    )
}

export const BookDetails=withVisibility(_BookDetails);