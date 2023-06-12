import * as z from 'zod'

export interface NewWidget {
  name: string
  price: number
  mfg: string
  inStock: number
}

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

export const widgetBackEndSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  mfg: z.string(),
  inStock: z.number(),
})
