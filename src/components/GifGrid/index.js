import React from 'react'
import './style.css'
import { GridGifItem } from '../GridGifItem'
import { useFetchGifs } from '../../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { gifs } = useFetchGifs(category)

    return (
        <>
            <h3 key={category}>{category}</h3>
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
