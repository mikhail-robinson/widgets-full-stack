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
    
    const name = req.body.name 
    const ids = await db.deleteWidget(name)
    
    // do I need to redirect?? OR will will it just 
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: `Ooops, you've taken a wrong turn` })
    }
  }
})

export default router
