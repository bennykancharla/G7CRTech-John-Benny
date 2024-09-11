import React from 'react';



interface AuthorObjectProps {
    _id?: string,
    name?: string,
    id?: string,
    photo?: string,
    biography?: string,
    tags?: string[],
}


interface AuthorListProps {
    authors: AuthorObjectProps[],
    onAuthorSelect: (author?: AuthorObjectProps) => void
}

export const AuthorList = ({ authors, onAuthorSelect }: AuthorListProps) => {

    return (
        <div className='list-group overflow-auto'>
            {authors.map(author => (
                <button key={author.id}
                    onClick={() => onAuthorSelect(author)}
                    className="list-group-item list-group-item-action"
                >{author.name}</button>
            ))}

        </div>
    )
}
