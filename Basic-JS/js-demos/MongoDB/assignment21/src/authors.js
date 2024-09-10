// var {connect,disconnect} =require('./connection');

// var url='mongodb://localhost/';

// async function getAllAuthors(){
//     var connection= await connect(url);

//     var db= connection.db(`Erwin'sDatabase`);

//     var authors= db.collection('authors');

//     var authors= await authors.find({},{biography:0,_id:0}).toArray();

//     return authors;

// }

// async function getAuthorById(id){

//     var connection= await connect(url);
//     var db= connection.db(`Erwin'sDatabase`);
//     var authors= db.collection('authors');
//     var author=await authors.findOne({id});
//     return author;

// }


// async function authorInfo() {
//     var connection= await connect(url);
//     var db= connection.db(`Erwin'sDatabase`);
//     var authors= db.collection('authors');
//   var result = await authors.aggregate([
//     {
//       $lookup: {
//         from: "Books Data",
//         localField: "id",
//         foreignField: "authorId",
//         as: "books"
//       }
//     },
//     {
//       $unwind:
//         "$books"
//     },
//     {
//       $unwind: "$books.reviews"
//     },
//     {
//       $group: {
//         _id: "$name",
//         booksCount: { $addToSet: "$_id" },
//         auhtorPhoto: { $first: "$photo" },
//         totalReviews: { $sum: 1 },
//         avgPrice: { $avg: "$books.price" },
//         totalRating: { $avg: "$books.reviews.rating" }
//       }
//     },

//     {
//       $project: {
//         booksCount: { $size: "$booksCount" },
//         auhtorPhoto: 1,
//         totalReviews: 1,
//         avgPrice: 1,
//         totalRating: 1
//       }
//     }
//   ]).toArray();

// //   console.log(JSON.stringify(result))
//   return result
// }



// module.exports={
//     getAllAuthors,
//     getAuthorById,
//     authorInfo
// }



////////////////////


var {executor,connect} =require('./connection');

var url='mongodb://localhost/';
var authorsExecutor=executor(url,`Erwin'sDatabase`,"authors");

async function getAllAuthors(){
    var connection= await connect(url);

    var db= connection.db(`Erwin'sDatabase`);

    var authors= db.collection('authors');

    var authors= await authors.find({},{biography:0,_id:0}).toArray();

    return authors;

}

//{id:'vivek-dutta-mishra', name:'Vivek Dutta Mishra', biography:''}

async function addAuthor(author){
   return await authorsExecutor(async authors=>{
    return await authors.insertOne(author);
   });
}

async function getAuthorById(id){

    var connection= await connect(url);
    var db= connection.db(`Erwin'sDatabase`);
    var authors= db.collection('authors');
    var author=await authors.findOne({id});
    return author;

}


async function authorInfo() {
    var connection= await connect(url);
    var db= connection.db(`Erwin'sDatabase`);
    var authors= db.collection('authors');
  var result = await authors.aggregate([
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
  ]).toArray();

//   console.log(JSON.stringify(result))
  return result
}





module.exports={
    getAllAuthors,
    getAuthorById,
    addAuthor,
    authorInfo
}