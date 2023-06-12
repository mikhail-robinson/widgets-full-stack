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
    const input = req.body as Models.NewWidget
    const newWidget = Models.widgetSchema.parse(input)
    await db.addWidget(newWidget)

    res.json(newWidget)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteWidget(id)
    .then(() => {
      res.json({ success: true })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/', async (req, res) => {
  try {
    const input = req.body
    const updatedWidget = Models.widgetBackEndSchema.parse(input)
    await db.updateWidget(updatedWidget.id, updatedWidget)
    res.status(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
