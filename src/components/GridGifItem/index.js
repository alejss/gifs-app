import React from 'react'
import './style.css'

export const GridGifItem = ({ id, title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
