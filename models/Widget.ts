import * as z from 'zod'

//front
export interface NewWidget {
  name: string
  price: number
  mfg: string
  inStock: number
}
//back
export interface Widget {
  id: number
  name: string
  price: number
  mfg: string
  inStock: number
}

export const widgetSchema = z.object({
  name: z.string(),
  price: z.number(),
  mfg: z.string(),
  inStock: z.number(),
})
