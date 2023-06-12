import express from 'express'
import * as db from '../db/db'
import { NewWidget, widgetSchema } from '../../models/Widget'

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
    const input = req.body as NewWidget
    const newWidget = widgetSchema.parse(input)
    await db.addWidget(newWidget)

    res.json(newWidget)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
