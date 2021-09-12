import React, { useState, useEffect } from 'react'
import './style.css'
import { GridGifItem } from '../GridGifItem'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Cats&limit=10&api_key=${process.env.REACT_APP_GIPHY_KEY}`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(({ id, title, images }) => ({ id, title, url: images.downsized_medium.url }))
        setImages(gifs)
    }

    getGifs()

    return (
        <>
            <h3 key={category}>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
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
