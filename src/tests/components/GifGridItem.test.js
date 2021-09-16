import { shallow } from 'enzyme'

import { GridGifItem } from '../../components/GridGifItem'

describe('GifGridItem', () => {
    const data = { title: 'Testing Component', url: 'www.1337.com/hello.png' }

    const wrapper = shallow(<GridGifItem {...data} />)

    test('Testing Snapshot Component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('The p tag must have a value with the title parameter', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(data.title)
    })

    test('the img tag must be equal to the url and alt of the props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(data.url)
        expect(img.prop('alt')).toBe(data.title)
    })

    test('Contain class animate__animated animate__swing', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__animated animate__swing')).toBe(true)
    })
    
    
});