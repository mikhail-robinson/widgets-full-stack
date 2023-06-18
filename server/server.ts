import { join } from 'node:path'
import express from 'express'
import widgets from './routes/widgets'

const server = express()
server.use(express.json())

server.use('/api/v1/widgets', widgets)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(join(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../index.html'))
  })
}

export default server
