import connection from './connection'

import { Widget, NewWidget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(input: NewWidget, db = connection) {
  const { name, price, mfg, inStock } = input
  return db<Widget>('widgets').insert({ name, price, mfg, inStock })
}

export function deleteWidget(id: number, db = connection) {
return db<Widget>('widgets').where('id', id).delete()
}