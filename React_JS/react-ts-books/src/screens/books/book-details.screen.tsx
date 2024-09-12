import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { BookDetails } from '../../components/book-details.component';
import { useBookContext } from '../../contexts/book.context';
import { useStatusContext } from '../../contexts/status.context';
import { LoadingAnimation } from '../../components/loading-animation.component';
import { Status } from '../../components/status.component';


export interface BookDetailsScreenProps {


}


export const BookDetailsScreen = (props: BookDetailsScreenProps) => {

    //type OptionalAuthor= Author|undefined;

    //const authorService = new InMemoryAuthorService();

    const {selectedBook, getBookById} = useBookContext();
    const {status}= useStatusContext();
    
   
    let { id } = useParams();

    useEffect(()=>{
        getBookById(id);
    },[id]);


    return <BookDetails 
                    book={selectedBook}
                    visibility={status.type==='SUCCESS'}  
                    otherwise={<Status/>}                  
            />;


    // if(!author)
    //     return <h2>Searching for Id:{id}</h2>;



    // return (

    //     <div className='AuthorDetailsScreenComponent'>

    //         <h2>{author.name}</h2>
    //         <div className="row">
    //             <div className="col col-sm-12 col-xs-12 col-md-6 col-lg-3">
    //                 <img src={author.photo} alt={author.name} className="author-photo"/>
    //             </div>
    //             <div className="col col-sm-12 col-xs-12 col-md-6 col-lg-9">
    //                 <h3>Biography</h3>
    //                 <p>{author.biography}</p>
    //                 <hr/>
    //                 Tags: {author.tags}
    //             </div>
    //         </div>

    //     </div>
    // );

}
