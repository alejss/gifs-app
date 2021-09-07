import React, { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setinputValue] = useState('Hello Everywone')

    const handleChangeText = (evn) => {
        const text = evn.target.value
        setinputValue(text)
    }

    const handleSubmit = (evn) => {
        evn.preventDefault()
        console.log(inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleChangeText}
            />
        </form>
    )
}
