import connection from './connection'

import { NewWidget, Widget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  console.log(`DB: `);
  
  return db<Widget>('widgets').select().orderBy('id', 'asc')
}

export function addWidget(data:NewWidget, db = connection) {
  console.log(`DB: ${data}`);
  
  return db('widgets').insert(data)
}
