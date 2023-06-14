import express from 'express'
import * as db from '../db/db'
import * as Models from '../../models/Widget'

const router = express.Router()

router.get('/', (req, res) => {
  db.getWidgets()
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
    const ids = await db.addWidget(input)
    res.json({ ids: ids[0] })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.delete('/', async (req, res) => {
  try {
    const input = req.body
    await db.deleteWidget(input)
    res.status(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.patch('/', async (req, res) => {
  try {
    const input = req.body
    const updatedWidget = JSON.parse(input)
    await db.updateWidget(updatedWidget.id, updatedWidget)
    res.status(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
