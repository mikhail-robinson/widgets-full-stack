import { AddNewWidget } from '../../models/Widget'
import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widget from './Widgets'
import { addWidget } from '../apiClient'

interface Props {
  loadWidgets: () => void
}

function AddWidget(props: Props) {
  const [newWidget, setNewWidget] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as Models.NewWidget)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newData = { ...newWidget, [name]: value }

    setNewWidget(newData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(newWidget)

    props.loadWidgets()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px' }}
      >
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={newWidget.name}
          className="text-slate-900"
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChange}
          value={newWidget.price}
          className="text-slate-900"
        />
        <label htmlFor="mfg">Manufacturer</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={newWidget.mfg}
          className="text-slate-900"
        />
        <label htmlFor="inStock">Amount in Stock</label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChange}
          value={newWidget.inStock}
          className="text-slate-900"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidget
// name: string
//   price: number
//   mfg: string
//   inStock: number
