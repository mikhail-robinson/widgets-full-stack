import * as z from 'zod'



export interface Widget extends NewWidget {
  id: number
}

export const widgetSchema = z.object({
  name: z.string(),
  price: z.number(),
  mfg: z.string(),
  inStock: z.number()
})

export type NewWidget = z.infer<typeof widgetSchema>