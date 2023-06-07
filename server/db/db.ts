import connection from './connection'

import { Widget, NewWidget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export async function addWidget(input: NewWidget, db = connection) {
  const { name, price, mfg, inStock } = input
  return db('widgets').insert({ name, price, mfg, inStock })
}
