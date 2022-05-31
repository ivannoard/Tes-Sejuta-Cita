import { ActionsTypes } from '../constants/actionsTypes'
import axios from 'axios'

export const fetchCategories = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('https://api.codetabs.com/v1/proxy?quest=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories')
      dispatch({ type: ActionsTypes.FETCH_CATEGORIES, payload: response.data })
    } catch (e) {
      console.log(e);
    }
  }
}

export const fetchBooks = (categoryId = 1) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://api.codetabs.com/v1/proxy?quest=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId ? categoryId : 1}`)
      dispatch({ type: ActionsTypes.FETCH_BOOKS, payload: response.data })
    } catch (e) {
      console.log(e);
    }
  }
}

export const setFavorites = (favorite) => {
  return {
    type: ActionsTypes.SET_FAVORITES,
    payload: favorite
  }
}

export const searchBook = (book) => {
  return {
    type: ActionsTypes.SEARCH_BOOK,
    payload: book
  }
}