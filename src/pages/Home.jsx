import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import { fetchCategories, setFavorites } from '../redux/actions/stuffAction'

const Home = () => {

  const dataBooks = useSelector(state => state.stuff.books)
  const [isLoading, setIsLoading] = useState(true)
  const [favorite, setFavorite] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(setFavorites(favorite))
    setIsLoading(false)
  }, [favorite])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBooks = dataBooks.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='Home'>
      <Navbar />
      <div className="container d-flex justify-content-center gap-5 flex-wrap mt-5">
        {isLoading ? 'loading' : currentBooks.map((item, index) => (
          <Card key={index} id={item.id} image={item.cover_url} title={item.title} author={item.authors} setFavorite={setFavorite} />
        ))}
      </div>
      <div className="container mt-3 d-flex justify-content-center">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataBooks.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Home