import express from 'express'
import * as db from '../db/db'

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

    const ids = await db.addWidget(input)
    res.json({ id: ids[0] })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: `Ooops, you've taken a wrong turn` })
    }
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteWidget(id)
    res.sendStatus(200)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: `Oop! Wrong turn again!` })
    }
  }
})

export default router

