import React, { useEffect, useState, useContext } from 'react';
import GetCities from '../apis/GetCities';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const SearchRestaurant = () => {
  const { restaurant, city, search } = useContext(RestaurantsContext);
  const [select, setSelected] = city;
  const [restaurantList, setRestaurantList] = restaurant;
  const [searchFilter, setSearchFilter] = search;
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetCities.get('/');
        if (response.status === 200) {
          setCityList(response.data.data.restaurant);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Control
        placeholder="Search restaurant here"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <Form.Select
        className="ms-5 w-25"
        value={select}
        onChange={(e) => setSelected(e.currentTarget.value)}
      >
        {cityList.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Button
        type="submit"
        onClick={(e) => {
          const fetchData = async () => {
            try {
              let query = '/';
              if (select !== '') {
                query += select;
              }
              const response = await RestaurantFinder.get(query);
              if (response.status === 200) {
                let restaurants = response.data.data.restaurants;
                const filter = searchFilter.split(' ').join('').toUpperCase();
                if (searchFilter !== '') {
                  restaurants = restaurants.filter(
                    (restaurant) =>
                      restaurant.name
                        .split(' ')
                        .join('')
                        .toUpperCase()
                        .indexOf(filter) > -1
                  );
                }
                setRestaurantList(restaurants);
                console.log(response);
              }
            } catch (err) {
              console.log(err);
            }
          };
          fetchData();
        }}
      >
        Search
      </Button>
    </Stack>
  );
};
export default SearchRestaurant;
