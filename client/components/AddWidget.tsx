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
    alert('New Widget added successfully!')
    setWidgetData({
      name: '',
      price: 0,
      mfg: '',
      inStock: 0,
      rating: 0,
    } as NewWidget)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Widget Name</label> <br />
          <input
            type="text"
            name="name"
            id=""
            onChange={handleChangeString}
            value={widgetData.name}
          />
        </div>
        <div>
          <label htmlFor="price">Widget Price</label> <br />
          <input
            type="text"
            name="price"
            id=""
            onChange={handleChangeNumber}
            value={widgetData.price}
          />
        </div>
        <div>
          <label htmlFor="mfg">Widget Mfg</label> <br />
          <input
            type="text"
            name="mfg"
            id=""
            onChange={handleChangeString}
            value={widgetData.mfg}
          />
        </div>
        <div>
          <label htmlFor="inStock">Widget Stock</label> <br />
          <input
            type="text"
            name="inStock"
            id=""
            onChange={handleChangeNumber}
            value={widgetData.inStock}
          />
        </div>
        <div>
          <label htmlFor="rating">Widget Rating</label> <br />
          <input
            type="text"
            name="rating"
            id=""
            onChange={handleChangeNumber}
            value={widgetData.rating}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default AddWidget
