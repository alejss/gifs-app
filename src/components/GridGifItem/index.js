import React from 'react'
import './style.css'

export const GridGifItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__swing">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
