import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export const GridGifItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__swing">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GridGifItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
