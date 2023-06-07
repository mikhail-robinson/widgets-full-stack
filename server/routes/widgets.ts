import express from 'express'
import { addWidget, getWidgets } from '../db/db'

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

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const widgets = await addWidget(input)
    res.json(widgets)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
