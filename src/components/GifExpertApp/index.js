import React, { useState } from 'react'
import './style.css'

// Components
import { AddCategory } from '../AddCategory'

export const GifExpertApp = () => {
  const [categories, seetCategories] = useState(['Cats', 'Dogs', 'Random'])
  return (
    <>
      <h2>Gif Expert App</h2>
      <hr />
      <AddCategory seetCategories={seetCategories} />
      <ol>
        {
          categories.map((categorie) => (<li key={categorie}>{categorie}</li>))
        }
      </ol>
    </>
  )
}
