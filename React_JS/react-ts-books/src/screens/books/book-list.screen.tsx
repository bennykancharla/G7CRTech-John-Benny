import React, { useState, useEffect } from 'react';
import {  Book } from '../../services/book';
import {  BookCard } from '../../components/book-card.component';
import { useBookContext } from '../../contexts/book.context';
import { LoadingAnimation } from '../../components/loading-animation.component';
import { useStatusContext } from '../../contexts/status.context';


export interface BookListScreenProps {

}




export const BookListScreen = () => {

    const { books,  getAllBooks}= useBookContext();
    const {status}=useStatusContext();
    
    //get all authors
    useEffect(getAllBooks,[]);

    if(status.type ==='LOADING')
        return <LoadingAnimation />;

    return (

        <div className='AuthorListScreenComponent'>
            <h2>Book List Screen</h2>
            <div className='row'>
                {



                    books.map((book:Book) => (
                        <div key={book.id} className='col col-md-4'>
                            <BookCard book ={book} />
                        </div>
                    ))
                }
            </div>

        </div>
    );

}
