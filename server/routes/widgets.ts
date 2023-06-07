import express from 'express'
import { addWidgets, getWidgets } from '../db/db'
import { widgetSchema } from '../../models/Widget'

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

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const widgetData = widgetSchema.parse(input)
    const ids = await addWidgets(widgetData)
    res.json({ id: ids[0] })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
    // res.status(200).json({ message: 'Post received!' })
  }
})
