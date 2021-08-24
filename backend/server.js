import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productsRoute.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('APR is working')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.cyan
      .underline
  )
)
