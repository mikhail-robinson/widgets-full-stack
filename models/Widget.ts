import * as z from 'zod'

export interface NewWidget {
  name: string
  price: number
  mfg: string
  inStock: number
  rating: number
}

export interface Widget {
  id: number
  name: string
  price: number
  mfg: string
  inStock: number
  rating: number
}

export const widgetSchema = z.object({
  name: z.string(),
  price: z.number(),
  mfg: z.string(),
  inStock: z.number(),
  rating: z.number(),
})

export const widgetBackEndSchema = z.object({
  name: z.string(),
  price: z.number(),
  mfg: z.string(),
  inStock: z.number(),
  id: z.number(),
  rating: z.number(),
})