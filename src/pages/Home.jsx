import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { fetchCategories, setFavorites } from '../redux/actions/stuffAction'

const Home = () => {

  const dataBooks = useSelector(state => state.stuff.books)
  const [isLoading, setIsLoading] = useState(true)
  const [favorite, setFavorite] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(setFavorites(favorite))
    setIsLoading(false)
  }, [favorite])

  return (
    <div className='Home'>
      <Navbar />
      <div className="container d-flex justify-content-center gap-5 flex-wrap mt-5">
        {isLoading ? 'loading' : dataBooks.map((item, index) => (
          <Card key={index} id={item.id} image={item.cover_url} title={item.title} author={item.authors} setFavorite={setFavorite} />
        ))}
      </div>
    </div>
  )
}

export default Home