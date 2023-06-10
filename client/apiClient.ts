/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { NewWidget, Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const res = await request.get(widgetUrl)
  console.log(`API: getting widgets`, res.body);  
  return res.body as Widget[]
}

export async function addWidget(data:NewWidget) {
  console.log(`API: `, {data});  
  return await request.post(widgetUrl).send(data)   
}
