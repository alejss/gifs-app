import React, { useState, useEffect } from 'react'
import './style.css'
import { GridGifItem } from '../GridGifItem'
import { getGifs } from '../../services/gifs'

export const GifGrid = ({ category }) => {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        (async () => {
            const gifsList = await getGifs(category)
            setGifs(gifsList)
        })()
    }, [category])

    getGifs()

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
