'use strict';

require("dotenv").config();
const express = require("express")
const db = require("./db/index.js");

const yelp = require('yelp-fusion');
const client = yelp.client('abaUkx_lHwx2Q32oOhjRVfEb05RCUdlHQsrJxGMo_VoZ8eQLZV5p6tH3rMhxhNqgnSOYZvoBIsMMz3HKE9sObjcXisiiROEFrq30eoOwZOkA27d2Qns0cHS5TZQaZHYx');

// console.log(await getCities());

const getBusinessParams = async () => {
    db
    .query('SELECT * from cities')
    .then(results => {
        let count = 1000
        for (let i = count; i < 80+count; i+=5) {
            setTimeout(() => {
                for (let j = 0; j < 5; j++) {
                    client.search({
                        location: results.rows[i + j].name,
                    }).then(response => insertRestaurant(response))
                    .catch(e => {
                        console.log(e);
                    });
                }
            }, 300 * (i-count));
        }
    })
    .catch(e => console.error(e.stack))
};

const insertRestaurant = async (response) => {
    for (const business of response.jsonBody.businesses) {
        const params = [
            business.id,
            business.name,
            business.location.city,
            business.location.address1,
            business.location.zip_code,
            business.rating,
            business.price,
            business.image_url,
            business.display_phone,
        ]
        await db.query(
            "INSERT INTO restaurants(id, name, city, address, zip, rating, price, image_url, phone_num) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", params);
    }
};
getBusinessParams();