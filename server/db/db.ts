import connection from './connection'

import { Widget, NewWidget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(widget: NewWidget, db = connection) {
  return db('widgets').insert(widget)
}

export function deleteWidget(id : number, db = connection) {
  return db('widgets').delete().where({'id' : id})
}

export function updateWidget(id : number, updatedWidget : NewWidget, db = connection) {
  return db('widgets').update(updatedWidget).where({'id' : id})
}