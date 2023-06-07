/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  //make a GET request to '/api/v1/widgets/'
  const res = await request.get(widgetUrl)
  //return response body
  return res.body
}
