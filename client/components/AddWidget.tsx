import { useState } from 'react'
import { Widget, NewWidget } from '../../models/Widget'
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
      <form onSubmit={handleSubmit} style={{}}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={widgetData.name}
          className="text-slate-900"
        />
        <label htmlFor="price">price</label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChange}
          value={widgetData.price}
          className="text-slate-900"
        />

        <label htmlFor="mfg">mfg</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={widgetData.mfg}
          className="text-slate-900"
        />

        <label htmlFor="inStock">inStock</label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChange}
          value={widgetData.inStock}
          className="text-slate-900"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default AddWidgetsForm
