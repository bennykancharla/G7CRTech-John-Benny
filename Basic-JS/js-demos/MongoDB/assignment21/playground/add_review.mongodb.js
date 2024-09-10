
// Select the database to use.
use(`Erwin'sDatabase`);

function addReview(bookId, review) {

    var book = db.getCollection('Books Data').findOneAndUpdate(
        { id: bookId },
        {
            $push: {
                reviews: review
            }
        },
        {new: true}

    );

    return book;
}

addReview("harry-potter-and-the-philosopher's-stone",{
        "name": "Rohit",
        "rating": 4,
        "comment": "The world has gone crazy with this book",
        "title": "Thr craziest Story"
});