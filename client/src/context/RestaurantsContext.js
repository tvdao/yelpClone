import React, {useState, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([])
    const [city, setCity] = useState("")
    return (
        <RestaurantsContext.Provider 
            value={{restaurant: [restaurants, setRestaurants], 
                    city: [city, setCity]}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}