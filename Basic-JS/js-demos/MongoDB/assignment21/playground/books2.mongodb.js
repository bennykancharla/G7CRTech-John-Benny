// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const { ReturnDocument } = require("mongodb");

// The current database to use.
use(`Erwin'sDatabase`);

db.getCollection('Books Data').aggregate([
        
   {    
    $unwind: "$reviews"
   },
   {
    $project: {
       title: 1,
       id: 1,
       _id: 0,
       author: 1,
       price: 1,
       votes: { $size: "$reviews" },
       rating: { $avg: "$reviews.rating" }
    }
   }
    
]);