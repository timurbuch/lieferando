import './App.css';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {fetchRestaurants, restaurantsSelector} from './slices/restaurants'

function App() {
  const dispatch = useDispatch()

  const { restaurants, loading, hasErrors} = useSelector(restaurantsSelector)
  useEffect(() =>{
    dispatch(fetchRestaurants())
  }, [dispatch])
  console.log('Restaurants: ', restaurants)

  const renderRestaurants = () => {
    if(loading) return <p>Loading Restaurants...</p>
    if(hasErrors) return <p>Cannot display Restaurants....</p>
  
    return restaurants.map(restaurant => 
      <div key={restaurant.idMeal}>
        <h2>{restaurant.strMeal}</h2>
        <img src={restaurant.strMealThumb} alt= ''/>
      </div>)
  }


  return (
    <section>
       <h1>Lieferando CLone lets go!</h1>
      <div>
      {renderRestaurants()}
      </div>
       
    </section>
    

  );
}

export default App;
