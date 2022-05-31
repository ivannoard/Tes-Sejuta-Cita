import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../redux/actions/stuffAction'

const Card = ({ id, image, title, author, display, setFavorite }) => {
  const dataBooks = useSelector(state => state.stuff.books)
  const handleAdd = (id) => {
    const favorite = dataBooks.filter(item => item.id === id)
    setFavorite(prev => [...prev, favorite])
  }
  return (
    <div className="card" style={{ width: '18rem', height: '100%' }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-bold">{author}</p>
        <button style={{ display: `${display}` }} className="btn btn-primary" onClick={() => handleAdd(id)}>Favorite</button>
      </div>
    </div>
  )
}

export default Card