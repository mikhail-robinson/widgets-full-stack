import connection from './connection'

import * as Models from '../../models/Widget'

export function getWidgets(db = connection): Promise<Models.Widget[]> {
  return db<Models.Widget>('widgets').select()
}

export function addWidget(newWidget: Models.NewWidget, db = connection) {
  return db<Models.Widget>('widgets').insert(newWidget)
}

export function deleteWidget(id: number, db = connection) {
  console.log(id);
  
  return db<Models.Widget>('widgets').where('id', id).del()
}