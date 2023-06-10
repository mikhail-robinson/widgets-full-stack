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

// add a post route to the server to

router.post('/', async (req, res) => {
  // getWidgets()
  try {
    const input = req.body

    // need a post function query to call
    const ids = await db.addWidget(input)
    // could add ZOD here for data validation
    res.json({ id: ids[0] })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: `Ooops, you've taken a wrong turn` })
    }
  }
})

router.delete('/', async (req, res) => {
  try {
    // i need to call id specifically
    const input = req.body
    // console.log('server', id)

    await db.deleteWidget(input)

    // no redirect needed, just send status
    res.status(200)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: `Oop! Wrong turn!` })
    }
  }
})

export default router
