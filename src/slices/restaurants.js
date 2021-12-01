import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    restaurants: [],
}
// SLice for restaurant with 3 reducers
const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        getRestaurants: state => {
            state.loading = true
        },
        getRestaurantsSuccess : (state, {payload}) => {
            state.restaurants = payload
            state.loading = false
            state.hasErrors = false
        },
        getRestaurantsFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    }
})
// Actions generted from the Slice
export const { getRestaurants, getRestaurantsSuccess, getRestaurantsFailure} = restaurantsSlice.actions

export const restaurantsSelector = state => state.restaurants

export default restaurantsSlice.reducer

// Asnchronous thunk action
export const fetchRestaurants = () => {
    return async dispatch => {
        dispatch(getRestaurants())

    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        const data = await response.json()

        dispatch(getRestaurantsSuccess(data.meals))
        dispatch(getRestaurantsSuccess(data.meals))
    } catch(error) {
        dispatch(getRestaurantsFailure())
    }
  }
}