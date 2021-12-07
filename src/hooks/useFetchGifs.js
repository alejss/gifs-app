import { useState, useEffect } from 'react'
import { getGifs } from '../services/gifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        gifs: [],
        loading: true,
    })

    useEffect(() => {
        const fetchGifs = async () => {
            const gifs = await getGifs(category)
            setState({ gifs, loading: false })
        };
        fetchGifs()

    }, [category])

    return state
}



