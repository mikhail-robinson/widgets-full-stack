import express from 'express'
import { schema } from '../../models/Widget'
import { addWidgets, getWidgets } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const widgets = await getWidgets()
    res.json(widgets)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }
})

export default router

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const widget = schema.parse(input)
    const [id] = await addWidgets(widget)
    res.json({ id })
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }
})
