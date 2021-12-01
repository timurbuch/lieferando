import './App.css';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {fetchRestaurants, restaurantsSelector} from './slices/restaurants'
import {showMore, listEndSelector } from './slices/listEnd'

function App() {
  const dispatch = useDispatch()
  
  const { restaurants, loading, hasErrors} = useSelector(restaurantsSelector)
  const { listEnd} = useSelector(listEndSelector)

  useEffect(() =>{
    dispatch(fetchRestaurants())
  }, [dispatch])

  //SLice restaurants to only show 4, 8, 16

  const handleClick = () => {
    dispatch(showMore())
  }

  const showRestaurants = restaurants.slice(0, listEnd)
  console.log(listEnd)
  console.log(showRestaurants)

  const renderRestaurants = () => {
    if(loading) return <p>Loading Restaurants...</p>
    if(hasErrors) return <p>Cannot display Restaurants....</p>
  
    return showRestaurants.map(restaurant => 
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
      <button onClick ={() => handleClick()}>Show more</button> 
    </section>
    

  );
}

export default App;
