import { useState } from 'react'
import { Widget } from '../../models/Widget'
import { addWidget } from '../apiClient'

interface Props {
  loadWidgets: () => void
}

function AddWidgetForm(props: Props) {
  const [widgetData, setWidgetData] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as Widget)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const newWidgetData = { ...widgetData, [name]: value }

    setWidgetData(newWidgetData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(widgetData)
    props.loadWidgets()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Widget Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={widgetData.name}
        />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={widgetData.price}
        />
        <label htmlFor="mfg">Made by: </label>
        <input
          type="text"
          name="mfg"
          onChange={handleChange}
          value={widgetData.mfg}
        />
        <label htmlFor="inStock">Stock number: </label>
        <input
          type="number"
          name="inStock"
          onChange={handleChange}
          value={widgetData.inStock}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidgetForm
