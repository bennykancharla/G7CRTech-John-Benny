import React from "react";

export const AppHeader = ({title,slogan}) => {
    
    const headerStyle = {
        color:'blue',
        backgroundColor: 'coral',
        textShadow : '-2px  2px 2px gray',
        padding:"10px"

    }

    return (
        <div style={headerStyle}>
            <h1>{title}</h1>
            <p>{slogan}</p>
        </div>
    )
};