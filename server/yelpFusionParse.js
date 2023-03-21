'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('rB-uSi1Q117G_onjgYyPdz1vbR5_-O5_TpE2vtRT08iV3XbYPf4j5TUYIyVkf6TXUuDkjcZEuwrg29BOTObmOwa-HAmDGOQ4x3JgyGXj-WHXsdGalLuUg0RrXBYZZHYx');
client.search({
    location: 'California',
  }).then(response => {
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });