export const getGifs = async (category) => {
    const categoryEncode = encodeURI(category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoryEncode}&limit=10&api_key=${process.env.REACT_APP_GIPHY_KEY}`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(({ id, title, images }) => ({ id, title, url: images.downsized_medium.url }))
    return gifs;
}