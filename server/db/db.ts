import connection from './connection'

import { Widget, NewWidget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(widget: NewWidget, db = connection) {
  return db('widgets').insert(widget)
}