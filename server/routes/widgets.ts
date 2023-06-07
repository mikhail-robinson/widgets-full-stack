import express from 'express'
import { getWidgets, addWidget, deleteWidget } from '../db/db'

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

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const ids = await addWidget(input)
    res.json({ id: ids[0] })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await deleteWidget(Number(id))
    res.status(200).send('OK')
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
