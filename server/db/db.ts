import connection from './connection'

import { NewWidget, Widget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidgets(newWigdets: NewWidget, db = connection) {
  return db<Widget>('widgets')
    .insert(newWigdets)
    .then((ids) => ids[0])
}
