import { getGifs } from '../../services/gifs';

describe('Testing fetch Gifs', () => {
    test('Get 10 elements', async () => {
        const gifs = await getGifs('random')
        expect(gifs.length).toBe(10)
    })

    test('Any param return 0 elements', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
});