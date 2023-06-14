import { useState } from 'react'
import { addWidget } from '../apiClient'
import { NewWidget } from '../../models/Widget'

interface Props {
  loadWidgets: () => void
}

function AddWidget(props: Props) {
  const [newWidget, setNewWidget] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as NewWidget)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(newWidget)
    props.loadWidgets()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const result = { ...newWidget, [name]: value }

    return setNewWidget(result)
  }

  return (
    <>
      <h1>Add a new widget!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div className="form-fields">
          <label htmlFor="price">Price: $</label>
          <input type="text" id="price" name="price" onChange={handleChange} />
        </div>
        <div className="form-fields">
          <label htmlFor="mfg">Manufacturer: </label>
          <input type="text" id="mfg" name="mfg" onChange={handleChange} />
        </div>
        <div className="form-fields">
          <label htmlFor="inStock">Quantity: </label>
          <input
            type="number"
            id="inStock"
            name="inStock"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Widget</button>
      </form>
    </>
  )
}

export default AddWidget
