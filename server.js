'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static('./public'));

// --> /hello is a path
// app.get('/hello', (request, response) => {
// response.status(200).send('hello')
// })

// app.get('/data', (request, response) => {
//   let airplaines = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well trained'
//   }

//   response.status(200).json(airplanes);
// }) 

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
})

app.use('*', (request, response) => {
  response.send('Sorry, that route does not exist');
})

// ports are always at the bottom
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));