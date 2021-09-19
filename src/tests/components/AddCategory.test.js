import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';

describe('Testing <AddCategory/>', () => {

    const setCategories = jest.fn()
    let wrapper

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory  {...{ setCategories }} />)
    })

    test('Testing Snapshot Component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Input box text changed', () => {
        const input = wrapper.find('input')
        const value = 'Hi everyone'
        input.simulate('change', { target: { value } })

        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('You should not submit the information', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('Run setCategories and clean the text', () => {
        const value = 'Goku';
        wrapper.find('input').simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault: () => { } })
 
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })



});