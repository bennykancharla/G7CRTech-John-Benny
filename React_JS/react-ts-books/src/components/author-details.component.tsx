import React from 'react';



interface AuthorObjectProps{
    _id ?: string,
    name?:string,
    id?:string,
    photo?:string,
    biography?:string,
    tags?: string[], 
}

interface AuthorDetailsProps{
    author?: any,
    onAuthorDelete?: (id:string)=>void;
}

export const AuthorDetails=({author,onAuthorDelete}:AuthorDetailsProps)=>{

    if(!author)
        return <h2>Select An Author</h2>

    return (
        <div>
           <div className ="container py-5">
    <div className ="col-md-9 border px-5 py-4 mx-auto d-sm-flex flex-column align-items-center">
        <img className ="img-fluid rounded-circle mr-4" 
        style={{"width": "120px", "border": "8px solid #9B5DE5"}}
         src={author.photo} alt={author.id} />
        <div className ="">
            <span
             style={{"fontWeight": "600", "color": "#9B5DE5"}}
             >Author</span>
            <h4>{author.name}</h4>
            <p className ="text-secondary overflow-auto" style={{"height": "300px"}}>{author.biography}</p>
        </div>
    </div>
</div>
           {
            onAuthorDelete &&
            <button
                onClick={()=>onAuthorDelete(author.id)}
                className='btn btn-danger mb-5'
            >Delete</button>
           }
        </div>
    )
}
