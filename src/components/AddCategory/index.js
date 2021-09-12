import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ seetCategories }) => {
    const [inputValue, setinputValue] = useState('')

    const handleChangeText = (evn) => {
        const text = evn.target.value
        setinputValue(text)
    }

    const handleSubmit = (evn) => {
        evn.preventDefault()
        if (inputValue.trim().length > 2) seetCategories(categories => [inputValue, ...categories])
        setinputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
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
    seetCategories: PropTypes.func.isRequired,
}
