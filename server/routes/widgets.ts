import express from 'express'
import { NewWidget } from '../../models/Widget'
import { getWidgets, addWidgets } from '../db/db'

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

//Create a post route
router.post('/', async (req, res) => {
  try {
    const NewWidget = req.body as NewWidget
    await addWidgets(NewWidget)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
