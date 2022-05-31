import { ActionsTypes } from '../constants/actionsTypes'

const initialState = {
  books: [],
  categories: [],
  favorites: []
}

export const stuffReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.FETCH_BOOKS:
      return { ...state, books: payload }
    case ActionsTypes.FETCH_CATEGORIES:
      return { ...state, categories: payload }
    case ActionsTypes.SET_FAVORITES:
      return { ...state, favorites: payload }
    case ActionsTypes.SEARCH_BOOK:
      return { ...state, books: payload }
    default:
      return state
  }
}