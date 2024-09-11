import React from 'react';
import BookReview from './book-review.component';

interface EachReviewObjectProps{
    name: string,
    title:string,
    details: string,
    rating: string,
    _id:string
}



interface EachBookObjectProps{
    _id: string,
    isbn:string,
    id:string,
    title:string,
    author:string,
    pages:string,
    rating: string,
    votes:string,
    description: string,
    tags: string[],
    series:string,
    seriesIndex:string,
    cover:string,
    reviews: EachReviewObjectProps[],
    price:string,
    authorId:string
}



interface BookDetailsProps {
    book : EachBookObjectProps | null,
    onBookDelete?: (id: string) => void;
}

export const BookDetails = ({ book, onBookDelete }: BookDetailsProps) => {

    const [reviewClicked,setReviewClick] = React.useState(false)
    if (!book)
        return <h2>Select An Book</h2>


    const onClickReviews = () => {
        setReviewClick(!reviewClicked)
    }

    return (
        <div className="card d-flex flex-column justify-content-center align-items-center" >
            <img src={book.cover} className="card-img-top w-50 " alt={book.id} />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <a href="#!" className="btn btn-primary mb-5 m-2" onClick={onClickReviews} data-mdb-ripple-init>Reviews</a>
                {
                    onBookDelete &&
                    <button
                        onClick={() => onBookDelete(book.id)}
                        className='btn btn-danger mb-5 m-2'
                    // data-mdb-ripple-init
                    >Delete</button>
                }

                { reviewClicked &&
                <BookReview bookReviews={book.reviews} />
                }
            </div>
        </div>


    )
}
