import request from 'superagent'
import { Widget, NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const res = await request.get(widgetUrl)
  return res.body as Widget[]
}

export async function addWidget(newWidget: NewWidget) {
  return await request.post(widgetUrl).send(newWidget)
}

export async function deleteWidget(widget: Widget) {
  console.log('Api Client:', widget)

  return await request.del(widgetUrl).send(widget)
}
