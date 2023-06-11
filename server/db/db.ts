import connection from './connection'

import { NewWidget, Widget } from '../../models/Widget'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget ( input: NewWidget, db = connection){
const { name, price, mfg, inStock} = input
return db('widgets').insert({name, price, mfg, inStock})

}

export async function deletePost(id: number, db = connection) {
  try {
    await db('widgets').where('id',id).del()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}
