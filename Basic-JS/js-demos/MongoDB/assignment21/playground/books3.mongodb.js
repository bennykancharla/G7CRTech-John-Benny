

use(`Erwin'sDatabase`);


let books=db.getCollection('Books Data');
let authors = db.getCollection('authors')

function getBooksAbovePrice(price){
    
   return  books.aggregate([
        {$match:{
            price:{$gt:price},
        }},
        
        {$project:{
            _id:0,
            id:1,
            title:1,
            author:1,
           
            
        }},
    
    
    ]);

}

//getBooksAbovePrice(400);


function getBooksWithMinReviewCount(votes){
    var selectedFields={
        _id:0,
        id:1,
        title:1,
        author:1
    }
    return books.aggregate([
        {
            $project:{
               ...selectedFields,
                reviews: {
                    $ifNull:[
                        "$reviews",
                        []
                    ]
                },
            }
        },
        {
            $project:{
               ...selectedFields,
              
                review_count: {$size:"$reviews"},
                rating:{
                    $ifNull:[
                        {$avg:"$reviews.rating"},
                        "not-reviewed"
                    ]
                } 

            }
        },
        {
            $match: { review_count: {$gte:votes}}
        },

        {
            $sort:{ author:-1 }
        }
    ]);

}


//getBooksWithMinReviewCount(0);







function updateAuthorId(bookId,authorId){

   return books.findOneAndUpdate({
      id:bookId
    },{
        $set:{
            authorId:authorId
        }
    });
}


//updateAuthorId('kane-and-abel','jeffrey-archer');



// books.insertOne({
//     title:"Atomic Habbits",
//     id:"atomic-habbits",
//     author:"James Clear",
//     authorId:"james-clear",
//     cover:"atomic-habbits.png"    
// });


// books.find();



function getUniqueAuthors(){
    return books.aggregate([
    {
        $unwind: "$reviews"
        
    },
    {
        $group : {
            _id: "$author",
            author: {$first:"$author"},
          totalBooks : {$addToSet: "$_id"},
          averagePrice: {$avg:"$price"},
          averageRating:{$avg:"$reviews.rating"},
            totalVotes: {$sum: 1}
        }
    },
    {
        $project:{
            _id:0,
            author: 1,
            totalBooks: {$size: "$totalBooks"},
            averagePrice:1,
            averageRating:{$round : ["$averageRating", 1]},
            totalVotes:1
        }
    }
]);

}

// getUniqueAuthors()

function authorInfo() {

   return authors.aggregate([
    {
      $lookup: {
        from: "Books Data",
        localField: "id",
        foreignField: "authorId",
        as: "books"
      }
    },
    {
      $unwind:
        "$books"
    },
    {
      $unwind: "$books.reviews"
    },
    {
      $group: {
        _id: "$name",
        booksCount: { $addToSet: "$_id" },
        auhtorPhoto: { $first: "$photo" },
        totalReviews: { $sum: 1 },
        avgPrice: { $avg: "$books.price" },
        totalRating: { $avg: "$books.reviews.rating" }
      }
    },

    {
      $project: {
        booksCount: { $size: "$booksCount" },
        auhtorPhoto: 1,
        totalReviews: 1,
        avgPrice: 1,
        totalRating: 1
      }
    }
  ]);


}

// books.find({});
// authors.find({});
authorInfo();