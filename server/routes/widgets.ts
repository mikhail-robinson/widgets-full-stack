import express from 'express'
import * as db from '../db/db'
import { widgetSchema } from '../../models/Widget'

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
    const widgetData = widgetSchema.parse(input)
    console.log(`Route: ${widgetData}`)
    const ids = await db.addWidget(widgetData)
    res.json({ id: ids[0] })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
