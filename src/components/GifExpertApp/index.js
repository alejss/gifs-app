import React, { useState } from 'react'
import './style.css'

// Components
import { AddCategory } from '../AddCategory'
import { GifGrid } from '../GifGrid'

export const GifExpertApp = () => {
  const [categories, seetCategories] = useState(['Cats'])
  return (
    <>
      <h2>Gif Expert App</h2>
      <hr />
      <AddCategory seetCategories={seetCategories} />
      <ol>
        {
          categories.map((category) => (<GifGrid key={category} category={category} />))
        }
      </ol>
    </>
  )
}
