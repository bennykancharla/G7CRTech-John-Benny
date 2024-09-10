import React from 'react'

interface EachReviewObjectProps{
    name: string,
    title:string,
    details: string,
    rating: string,
    _id:string
}

interface ArrayOfReviewsProps{
    bookReviews: EachReviewObjectProps[]
}

export default function BookReview({bookReviews}:ArrayOfReviewsProps) {
  return (
    <div className='mb-5'>
                    <h3>Reviews</h3>
                    <ul className='' style={{"listStyle": "none"}}>
                        { bookReviews.length !==0 ?
                            bookReviews.map((eachBook) => 
                            <li key={eachBook._id}>
                                <h5 className='fw-bold'>{eachBook.name}</h5>
                                <p><span className='fw-bold'>Title :</span>{eachBook.title}</p>
                                <p><span className='fw-bold'>Desc :</span>{eachBook.details}</p>
                            </li>
                            )
                        :
                        <li className='mb-5' key="No-review">No Reviews Avaliable</li>    
                        
                        }
                    </ul>
                </div>
  )
}
