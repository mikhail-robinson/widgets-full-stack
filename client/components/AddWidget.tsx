import { useState } from 'react'
import { addWidget } from '../apiClient'
import { NewWidget } from '../../models/Widget'

interface Props {
  loadWidgets: () => void
}

function AddWidget(props: Props) {
  const [widgetData, setWidgetData] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as NewWidget)

  function handleChangeString(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    console.log(name, value)

    const newData = { ...widgetData, [name]: value }

    setWidgetData(newData)
  }

  function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    console.log(name, value)

    const newData = { ...widgetData, [name]: Number(value) }

    setWidgetData(newData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(widgetData)

    props.loadWidgets()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChangeString}
          value={widgetData.name}
        />
        <label htmlFor="price">Widget Price</label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChangeNumber}
          value={widgetData.price}
        />
        <label htmlFor="mfg">Widget Mfg</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChangeString}
          value={widgetData.mfg}
        />
        <label htmlFor="inStock">Widget Stock</label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChangeNumber}
          value={widgetData.inStock}
        />
        <label htmlFor="rating">Widget Rating</label>
        <input
          type="text"
          name="rating"
          id=""
          onChange={handleChangeNumber}
          value={widgetData.rating}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidget
