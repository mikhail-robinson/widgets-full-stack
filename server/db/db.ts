import connection from './connection'

import * as Models from '../../models/Widget'

export function getWidgets(db = connection): Promise<Models.Widget[]> {
  return db<Models.Widget>('widgets').select()
}

export function addWidget(
  input: Models.NewWidget,
  db = connection
): Promise<Models.NewWidget[]> {
  const { name, inStock, price, mfg } = input
  return db<Models.NewWidget>('widgets').insert({ name, inStock, price, mfg })
}

export function deleteWidget(id: number,db = connection) {
    return db('widgets').where('id', id).del()
}
