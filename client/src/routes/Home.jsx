import React from 'react'
import Header from '../components/Header'
import SearchRestaurant from '../components/SearchRestaurant'
import RestaurantList from "../components/RestaurantList"

const Home = () => {
    return (
        <div>
            <Header />
            <SearchRestaurant />
            <RestaurantList />
        </div>
    )
}

export default Home