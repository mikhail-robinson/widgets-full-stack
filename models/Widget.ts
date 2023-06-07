import * as z from 'zod'

export const schema = z.object({
  name: z.string(),
  price: z.number(),
  mfg: z.string(),
  inStock: z.number(),
})

export type Widget = z.infer<typeof schema>
