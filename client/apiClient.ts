/* eslint-disable @typescript-eslint/no-unused-vars */
import request, { get } from 'superagent'
import * as Models from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const res = await request.get(widgetUrl).set('Accept', 'application/json')

  return res.body as Models.Widget[]
}

export async function addWidgets(newWidget: Models.NewWidget) {
  return await request.post(widgetUrl).send(newWidget)
}
