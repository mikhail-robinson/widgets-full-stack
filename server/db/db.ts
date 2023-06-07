import connection from './connection'

import * as Models from '../../models/Widget'

export function getWidgets(db = connection): Promise<Models.Widget[]> {
  return db<Models.Widget>('widgets').select()
}

export function addWidget(
  input: Models.NewWidget,
  db = connection
): Promise<Models.NewWidget[]> {
  // important to destructure and make sure your names match your naming conventions
  const { name, inStock, price, mfg } = input
  return db<Models.NewWidget>('widgets').insert({ name, inStock, price, mfg })
}
