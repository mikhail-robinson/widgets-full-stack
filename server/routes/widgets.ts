import express from 'express'
import { getWidgets } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Post received!' })
})
