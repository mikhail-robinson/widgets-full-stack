import express from 'express'
import * as db from '../db/db'
import { getWidgets } from '../db/db'
import { log } from 'console'
//import { addWidget } from '../db/db'

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

// why I don't need to import addWidget???

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const ids = await db.addWidget(input)
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
   await db.deletePost(Number(id))
    res.status(200).send('OK')
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
