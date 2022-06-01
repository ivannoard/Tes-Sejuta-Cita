import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, searchBook } from '../redux/actions/stuffAction'

const Search = () => {
  const dataBooks = useSelector(state => state.stuff.books)
  const [book, setBook] = useState('')
  const dispatch = useDispatch()
  const [result, setResult] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    setResult(dataBooks.filter(item => item.title.toLowerCase() === book.toLowerCase()))
  }

  useEffect(() => {
    result.length === 0 ? dispatch(fetchBooks()) : dispatch(searchBook(result))
  }, [result])

  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={book} onChange={(e) => setBook(e.target.value)} />
      <button className="btn btn-outline-success" onClick={(e) => handleSearch(e)}>Search</button>
    </form>
  )
}

export default Search