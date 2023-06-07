import { useState } from 'react'
import { addWidgets } from '../apiClient'
import { Widget, NewWidget } from '../../models/Widget'

interface Props {
  loadWidgets: () => void
}

function AddWidgetForm(props: Props) {
  const [widgetData, setWidgetData] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as NewWidget)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const newData = { ...widgetData, [name]: value }
    setWidgetData(newData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidgets(widgetData)
    props.loadWidgets
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="widget-form">
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={widgetData.name}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id=""
          onChange={handleChange}
          value={widgetData.price}
        />

        <label htmlFor="mfg">MFG</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={widgetData.mfg}
        />

        <label htmlFor="instock">In Stock</label>
        <input
          type="number"
          name="instock"
          id=""
          onChange={handleChange}
          value={widgetData.inStock}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidgetForm
