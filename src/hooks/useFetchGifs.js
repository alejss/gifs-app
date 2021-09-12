import { useState, useEffect } from 'react'
import { getGifs } from '../services/gifs'

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        gifs: [],
        loading: true,
    })

    useEffect(() => {
        const fetchGifs = async () => {
            const gifs = await getGifs(category)
            setstate({ gifs, loading: false })
        };
        fetchGifs()

    }, [category, setstate])

    return state
}