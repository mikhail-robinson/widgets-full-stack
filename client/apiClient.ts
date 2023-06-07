/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget, NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const res = await request.get(widgetUrl)
  console.log(res.body)

  return res.body as Widget
}

export async function addWidgets(newWidget: NewWidget) {
  return await request.post(widgetUrl).send(newWidget)
}
