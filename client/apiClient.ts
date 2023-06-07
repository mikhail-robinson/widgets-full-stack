/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  // first declare the request and path
  const res = await request.get(widgetUrl)
  // then return with type, ref shape of data to be array
  return res.body as Widget[]
}
