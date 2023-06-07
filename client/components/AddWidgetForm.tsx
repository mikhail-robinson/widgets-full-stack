import { useState } from 'react'
import { NewWidget } from '../../models/Widget'
import { addWidget } from '../apiClient'

interface Props {
  loadWidget: () => void
}

function AddWidgetForm(props: Props) {
  const [newWidget, setNewWidget] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as NewWidget)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name // this is triggered from the name input OR the description input
    const value = event.target.value

    const newData = { ...newWidget, [name]: value }

    setNewWidget(newData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(newWidget)

    props.loadWidget()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={newWidget.name}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChange}
          value={newWidget.price}
        />
        <label htmlFor="mfg">MFG</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={newWidget.mfg}
        />
        <label htmlFor="inStock">In Stock</label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChange}
          value={newWidget.inStock}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidgetForm
