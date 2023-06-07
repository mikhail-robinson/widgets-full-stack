/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget, NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const res = await request.get(widgetUrl)
  return res.body as Widget[]
}

export async function addWidget(widget: NewWidget) {
  return await request.post(widgetUrl).send(widget)
}