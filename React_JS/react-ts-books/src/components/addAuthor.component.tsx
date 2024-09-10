import React from 'react'

interface AuthorObjectProps{
    _id ?: string,
    name?:string,
    id?:string,
    photo?:string,
    biography?:string,
    tags?: string[], 
}


interface AddAuthorDetailsProps{
    addNewAuthor : (author:AuthorObjectProps) => void
}

export const AddAuthor = ({addNewAuthor}: AddAuthorDetailsProps) => {

    const [nameInput,setNameInput] = React.useState("");
    const [photoInput,setPhotoInput] = React.useState("");
    const [biographyInput,setBiographyInput] = React.useState("");

        const onChangeName = (event: any) =>{
            setNameInput(event.target.value)
        }

        const onChangePhoto = (event : any) => {
            setPhotoInput(event.target.value)
        }

        const onChangeBio = (event : any) =>{
            setBiographyInput(event.target.value)
        }

            const clearInputFields = () => {
                setNameInput("");
                setPhotoInput("");
                setBiographyInput("");
            }

    const onClickAddAuthor = () => {
        // let name = document.getElementById("name") as HTMLInputElement;
        // const nameValue = name.value;
        // let photo = document.getElementById("photo") as HTMLInputElement;
        // const photoValue = photo.value;
        // let biography = document.getElementById("biography") as HTMLInputElement;
        // const biographyValue = biography.value
        
        const id = nameInput.split(" ").join("-").toLowerCase()
        // console.log(id)
        addNewAuthor({name:nameInput,photo:photoInput,biography:biographyInput,id})
        clearInputFields()
    }

    var t = "div";
    return (
        <div className='p-3' style={{"height": "100%"}}>
            <h1>Add Author Details</h1>
            <form className='d-flex flex-column align-items-start h-100 justify-content-center'>
                <div className='d-flex flex-column mb-5'>
                    <label htmlFor='name'>Author Name</label>
                    <input id='name' onChange={onChangeName} value={nameInput} placeholder='Enter Author Name' type='text' />
                </div>
                <div className='d-flex flex-column mb-5'>
                    <label htmlFor='photo'>Author Photo URL</label>
                    <input id='photo' onChange={onChangePhoto} value={photoInput} placeholder='Enter Author Photo URL' type='text' />

                </div>
                <div className='d-flex flex-column mb-5'>
                    <label htmlFor='biography'>Author Biography</label>
                    <textarea id='biography' onChange={onChangeBio} value={biographyInput} placeholder='Enter Author Biography' rows={4} cols={80} />

                </div>
                <button className='btn btn-primary' onClick={onClickAddAuthor}>Save</button>
            </form>
        </div>
    )
}
