import axios from "axios"

const initialState = {
  data: {}
}

const API_URL = "https://dummyjson.com/products?limit=20"

export const prodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_GET_SUCCESS":
      return {...state, data: action.payload}
    default:
      return state
  }
}

export const fetchProds = () => {
  return async (dispatch) => {
    const responce = await axios.get(API_URL)
    dispatch({type: "PRODUCTS_GET_SUCCESS", payload: responce.data})
  }
}