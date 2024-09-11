import React, { useState, useEffect } from 'react';
import { LabeledInput, TextArea } from '../../components/input.component';
import { Author } from '../../services/author';
import { lengthRange, required } from '../../utils/validators';


export interface AuthorAddScreenProps {


}


let dummyAuthor:Author={
    name:"",
    id:"",
    biography:"",
    photo:"",
    tags:[],
}

export const AuthorAddScreen = (props: AuthorAddScreenProps) => {

    const [author,setAuthor]=useState(dummyAuthor);

    const handleAuthorUpdate=(value:any, id:string)=>{
        if(id==='tags'){
            value=value.split(',')
        }
        // console.log(id,value)
        setAuthor({
            ...author,
            [id]:value
        });
    }

    const handleSave=()=>{
        console.log('saving',author);
    }


    return (

        <div className='AuthorAddScreenComponent'>
            <h2>Add New Author</h2>

            <hr />
            <div className="row">
                <div className="col-12">
                    <LabeledInput id="name" validators={[required()]} value={author.name} onUpdate={handleAuthorUpdate}/>
                    <LabeledInput id="id" validators={[lengthRange(3,5),required(), () => ({message:"Not"})]} value={author.id} onUpdate={handleAuthorUpdate} />
                    <LabeledInput id="photo" validators={[required()]} value={author.photo} onUpdate={handleAuthorUpdate} />
                    <LabeledInput  id="biography" 
                                    validators={[required()]}
                                   value={author.biography} 
                                   onUpdate={handleAuthorUpdate} 
                                   componentBuilder={(props:any)=><TextArea  {...props}/>}
                                   
                                   />
                    <LabeledInput validators={[required()]} id="tags" value={author.tags} onUpdate={handleAuthorUpdate} />
                    <p />
                    <button 
                        onClick={handleSave}
                    className='btn btn-primary form-control'>Add Author</button>

                </div>

                <div className="col-6">
                </div>
            </div>

        </div>
    );

}
