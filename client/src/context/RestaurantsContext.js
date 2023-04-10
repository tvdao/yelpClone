import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  return (
    <RestaurantsContext.Provider
      value={{
        restaurant: [restaurants, setRestaurants],
        city: [city, setCity],
        search: [search, setSearch],
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
