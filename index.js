const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getCars = (request, response) => {
  pool.query('SELECT * FROM cars', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addCar = (request, response) => {
  const {model, carType, price, year, horsePower, seats, doors, transmission, quantity, imagesLink} = request.body

  pool.query(
    'INSERT INTO cars (model, carType, price, year, horsePower, seats, doors, transmission, quantity, imagesLink) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
    [model, carType, price, year, horsePower, seats, doors, transmission, quantity, imagesLink],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Car added.'})
    },
  )
}

app
  .route('/cars')
  // GET endpoint
  .get(getCars)
  // POST endpoint
  .post(addCar)

// Start server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server listening`)
})