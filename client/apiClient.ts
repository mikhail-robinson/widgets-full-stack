/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { NewWidget, Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const res = await request.get(widgetUrl)    
  return res.body as Widget[]
}

export async function addWidget(data:NewWidget) {
  return await request.post(widgetUrl).send(data)   
}
