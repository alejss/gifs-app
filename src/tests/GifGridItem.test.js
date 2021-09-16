import { shallow } from 'enzyme'

import {GridGifItem} from '../components/GridGifItem'

describe('GifGridItem', () => {
    const data = { title: 'Testing Component', url: 'www.1337.com/hello.png' }

    const wrapper = shallow(<GridGifItem {...data} />)

    test('Testing Snapshot Component', () => {
        expect(wrapper).toMatchSnapshot()
    })
});