import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
const Favorite = () => {
  const favorite = useSelector(state => state.stuff.favorites)
  const favoriteData = []
  favorite.forEach(item => {
    item.forEach((data, index) => {
      favoriteData.push(data)
    })
  })
  return (
    <div className='Favorite'>
      <Navbar />
      <div className="container d-flex flex-wrap gap-5 justify-content-center">
        {favoriteData.length < 1 ? 'No Favorite Books' : favoriteData.map((item, index) => (
          <Card key={index} id={item.id} image={item.cover_url} title={item.title} author={item.authors} display='none' />
        ))}
      </div>
    </div>
  )
}

export default Favorite