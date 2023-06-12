import express from 'express'
import { widgetSchema } from '../../models/Widget'
import { addWidget, getWidgets } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const widgets = await getWidgets()
    res.json(widgets)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Internal Server Error - getWidgets' })
    }
  }
})

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const widgetData = widgetSchema.parse(input)
    const widgets = await addWidget(widgetData)
    res.json(widgets)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Internal Server Error - addWidget' })
    }
  }
})

export default router
