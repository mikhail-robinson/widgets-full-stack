import { useState } from 'react'
import { NewWidget } from '../../models/Widget'
import { addWidgets } from '../apiClient'

interface Props {
  loadWidgets: () => void
}

function AddWidgetsForm(props: Props) {
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

    props.loadWidgets()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
      >
        <label style={{ marginTop: '20px' }} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={widgetData.name}
          className="text-slate-900"
        />
        <label style={{ marginTop: '20px' }} htmlFor="price">
          Price:
        </label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChange}
          value={widgetData.price}
          className="text-slate-900"
        />

        <label style={{ marginTop: '20px' }} htmlFor="mfg">
          Manufacturer:
        </label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={widgetData.mfg}
          className="text-slate-900"
        />

        <label style={{ marginTop: '20px' }} htmlFor="inStock">
          In Stock:
        </label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChange}
          value={widgetData.inStock}
          className="text-slate-900"
        />

        <button style={{ marginTop: '20px' }} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
export default AddWidgetsForm
