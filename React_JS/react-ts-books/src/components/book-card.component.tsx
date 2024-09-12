import React, { useState, useEffect } from 'react';
import { Book } from '../services/book';
import { Link } from 'react-router-dom';


export interface BookCardProps {

    book: Book

}


export const BookCard = ({ book }: BookCardProps) => {

    const width='250px'
    const style={
        width,
        
    }

    const imageStyle={
        width,
    }

    return (

        <div className="card mb-3" style={style}>
            <img src={book.cover} style={imageStyle} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description.substring(0,50)}</p>
                    <Link className="btn btn-default" to={`/author/details/${book.id}`}>More...</Link>
                </div>
        </div>
    );

}
