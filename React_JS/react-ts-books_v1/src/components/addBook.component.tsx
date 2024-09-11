import React from 'react'

interface BookDetailsProps {
  title: string,
  author: string,
  rating: string,
  cover: string,
  description: string
  id: string
}


interface EachReviewObjectProps {
  name: string,
  title: string,
  details: string,
  rating: string,
  _id: string
}


interface EachBookObjectProps {
  _id: string,
  isbn: string,
  id: string,
  title: string,
  author: string,
  pages: string,
  rating: string,
  votes: string,
  description: string,
  tags: string[],
  series: string,
  seriesIndex: string,
  cover: string,
  reviews: EachReviewObjectProps[],
  price: string,
  authorId: string
}


interface AddBookProps {
  addNewBook: (book: BookDetailsProps) => void
}

interface InputElements {
  title: HTMLInputElement,
  author: HTMLInputElement,
  rating: HTMLInputElement,
  cover: HTMLInputElement,
  description: HTMLInputElement,
}

export const AddBook = ({ addNewBook }: any) => {

  const [titleInput, setTitleInput] = React.useState("")
  const [authorInput, setAuthorInput] = React.useState("")
  const [ratingInput, setRatingInput] = React.useState("")
  const [coverInput, setCoverInput] = React.useState("")
  const [descriptionInput, setDescriptionInput] = React.useState("")

  const onChangeTitle = (event: any) => {
    setTitleInput(event.target.value)
  }
  const onChangeAuthor = (event: any) => {
    setAuthorInput(event.target.value);
  }
  const onChangeRating = (event: any) => {
    setRatingInput(event.target.value)
  }
  const onChangeCover = (event: any) => {
    setCoverInput(event.target.value)
  }
  const onChangeDescription = (event: any) => {
    setDescriptionInput(event.target.value);
  }

  const clearAllInputs = () => {
    setTitleInput("");
    setAuthorInput("");
    setRatingInput("")
    setCoverInput("")
    setDescriptionInput("");
  }



  const onClickSaveBook = () => {
    // const titleEle = document.getElementById("title") as HTMLInputElement;
    // let titleValue = titleEle.value;

    // const authorEle = document.getElementById("authorName") as HTMLInputElement;
    // let authorValue = authorEle.value;

    // const ratingEle = document.getElementById("rating") as HTMLInputElement;
    // let ratingValue = ratingEle.value

    // const coverEle = document.getElementById("cover") as HTMLInputElement;
    // let coverValue = coverEle.value;

    // const descriptionEle = document.getElementById("description") as HTMLInputElement;
    // let descriptionValue = descriptionEle.value

    const id = titleInput.split(" ").join("-").toLowerCase()


    addNewBook({
      title: titleInput,
      author: authorInput,
      rating: ratingInput,
      cover: coverInput,
      description: descriptionInput,
      id
    });

    clearAllInputs();

  }

  return (
    <div className='p-3' style={{ "height": "100%" }}>
      <h1>Add New Book</h1>
      <form className='d-flex flex-column w-sm-100 align-items-start h-100 justify-content-start'>
        <div className='d-flex flex-column mb-3 w-75 '>
          <label className='form-label'>Book Title:</label>
          <input id='title' onChange={onChangeTitle} className='form-control w-100' value={titleInput} placeholder='Enter Title of the Book' type='text' />
        </div>
        <div className='d-flex flex-column mb-3  w-75'>
          <label className='form-label'>Book Author:</label>
          <input id='authorName' onChange={onChangeAuthor} className='form-control' value={authorInput} placeholder='Enter Author of the Book' type='text' />
        </div>
        <div className='d-flex flex-column mb-3  w-75'>
          <label className='form-label'>Book Rating:</label>
          <input id='rating' onChange={onChangeRating} className='form-control' value={ratingInput} placeholder='Enter Rating of the Book' type='text' />
        </div>
        <div className='d-flex flex-column mb-3  w-75'>
          <label className='form-label'>Book Cover URL:</label>
          <input id='cover' onChange={onChangeCover} className='form-control' value={coverInput} placeholder='Enter Cover URL of the Book' type='text' />
        </div>
        <div className='d-flex flex-column mb-3  w-75'>
          <label className='form-label'>Book Description:</label>
          <textarea id='description' onChange={onChangeDescription} className='form-control' value={descriptionInput} placeholder='Enter Description of the Book' rows={4} cols={70} />
        </div>

        <button className='btn btn-primary' onClick={onClickSaveBook}>Save Book</button>
      </form>
    </div>
  )
}
