import connection from './connection'

import { Widget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select().orderBy('id', 'desc')
}

export function addWidgets(input: Widget, db = connection) {
  const { name, price, mfg, inStock } = input
  return db('widgets').insert({ name, price, mfg, inStock })
}
