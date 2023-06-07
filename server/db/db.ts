import connection from './connection'

import { NewWidget, Widget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidgets(input: NewWidget, db = connection) {
  const { name, price, mfg, inStock } = input
  return db('widgets').insert({ name, price, mfg, inStock })
}
