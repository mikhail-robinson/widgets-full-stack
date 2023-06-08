import express from 'express'
import * as db from '../db/db'
import { widgetSchema, widgetBackEndSchema, NewWidget } from '../../models/Widget'

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
    
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteWidget(id)
    console.log(id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const input = req.body 
    const updatedWidget = widgetBackEndSchema.parse(input)
    await db.updateWidget(updatedWidget.id, updatedWidget)
    console.log(id)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
