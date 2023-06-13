import express from 'express'
import { widgetSchema } from '../../models/Widget'
import { addWidget, getWidgets, deleteWidget } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const widgets = await getWidgets()
    res.json(widgets)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
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
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

router.delete('/', async (req, res) => {
  try {
    const input = req.body
   await deleteWidget(input)
    res.status(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

export default router
