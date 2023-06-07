import connection from './connection'

import { NewWidget, Widget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(data:NewWidget, db = connection) {
  return db('widgets').insert(data) as 
}
