import React from 'react'
import PropTypes from 'prop-types';
import './style.css'
import { GridGifItem } from '../GridGifItem'
import { useFetchGifs } from '../../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    const { gifs, loading } = useFetchGifs(category)
    return (
        <>
            <h3 key={category}>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className="card-grid">
                {
                    gifs.map((image) => (
                        <GridGifItem
                            key={image.id}
                            {...image}
                        />)
                    )
                }
            </div>
        </>
    )
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired,
}
