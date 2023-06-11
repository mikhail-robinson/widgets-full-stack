import { useState } from 'react'
import { addWidget } from '../apiClient'
import { NewWidget } from '../../models/Widget'
import 'bulma/css/bulma.css'

function AddWidget() {
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

  async function handleSubmit() {
    await addWidget(widgetData)
  }
  return (
    <>
      <div className="field">
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            {' '}
            Would like ot add your widget?{' '}
          </label>
          <p className="help">Name</p>
          <input
            className="control"
            type="text"
            name="name"
            id=""
            onChange={handleChange}
            value={widgetData.name}
          />

          <p className="help">Price</p>
          <input
            className="control"
            type="number"
            name="price"
            id=""
            onChange={handleChange}
            value={widgetData.price}
          />

          <p className="help">MFG</p>
          <input
            className="control"
            type="text"
            name="mfg"
            id=""
            onChange={handleChange}
            value={widgetData.mfg}
          />

          <p className="help">Stock</p>
          <input
            className="control"
            type="number"
            name="inStock"
            id=""
            onChange={handleChange}
            value={widgetData.inStock}
          />

          <br></br>

          <button className="button is-primary" type="submit">
            Add Widget
          </button>
        </form>
      </div>
    </>
  )
}
export default AddWidget
