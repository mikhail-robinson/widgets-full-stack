import connection from './connection'

import { Widget } from '../../models/Widget'
import { NewWidget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(
  input: NewWidget,
  db = connection
): Promise<NewWidget[]> {
  const { name, price, mfg, inStock } = input
  return db('widgets').insert({ name, price, mfg, inStock })
}

export function deleteWidget(
  input: Widget,
  db = connection
): Promise<Widget[]> {
  const { id } = input
  return db<Widget>('widgets').where('id', id).del()
}
