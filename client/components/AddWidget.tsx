import { useState } from 'react'
import { addWidgets } from '../apiClient'
import { NewWidget } from '../../models/Widget'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false) //added using ChatGPT to not rerender the form if submit button is pressed. This uses a conditionalin the return to check if the onSubmit function has been called

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const newWidgetData = { ...widgetData, [name]: value }

    if (name === 'price') {
      setWidgetData(() => ({ ...newWidgetData, price: Number(value) }))
      return
    }
    if (name === 'inStock') {
      setWidgetData(() => ({ ...newWidgetData, inStock: Number(value) }))
      return
    }

    setWidgetData(newWidgetData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidgets(widgetData)
    props.loadWidgets()
    setSubmitted(true)
    navigate('/submit')
  }

  return (
    <div>
      {!submitted && (
        <form onSubmit={handleSubmit} className="widget-form">
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={widgetData.name}
                className="form-input"
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="price" className="form-label">
              Price
              <input
                type="number"
                name="price"
                id="price"
                onChange={handleChange}
                value={widgetData.price}
                className="form-input"
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="mfg" className="form-label">
              MFG
              <input
                type="text"
                name="mfg"
                id="mfg"
                onChange={handleChange}
                value={widgetData.mfg}
                className="form-input"
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="inStock" className="form-label">
              In Stock
              <input
                type="number"
                name="inStock"
                id="inStock"
                onChange={handleChange}
                value={widgetData.inStock}
                className="form-input"
              />
            </label>
          </div>

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default AddWidgetForm
