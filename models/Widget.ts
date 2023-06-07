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

export interface AddNewWidget {
  newWidget : {
    name: string
    price: number
    mfg: string
    inStock: number
  }
  handleSubmit : (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}