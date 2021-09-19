import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('')

    const handleChangeText = (evn) => {
        const text = evn.target.value
        setinputValue(text)
    }

    const handleSubmit = (evn) => {
        evn.preventDefault()
        if (inputValue.trim().length > 2) setCategories(categories => [inputValue, ...categories])
        setinputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input
                type='text'
                placeholder='Add categories...'
                value={inputValue}
                onChange={handleChangeText}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
