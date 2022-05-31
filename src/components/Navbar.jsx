import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBooks, fetchCategories } from '../redux/actions/stuffAction'
import Search from './Search'

const Navbar = () => {
  const [books, setBooks] = useState('')
  const dataCategories = useSelector(state => state.stuff.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks(books))
    dispatch(fetchCategories())
  }, [books])
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h4 className="navbar-brand">Books App</h4>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' style={{ textDecoration: 'none' }}>
                <p className="nav-link active" aria-current="page">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/favorite' style={{ textDecoration: 'none' }}>
                <p className="nav-link">Favorite</p>
              </Link>
            </li>
            <li>
              <select className="form-select" aria-label="Default select example" onChange={(e) => setBooks(e.target.value)}>
                {dataCategories.map((item, index) => (
                  <option key={index} value={item.id}>{item.name}</option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar