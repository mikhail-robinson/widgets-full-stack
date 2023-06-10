import { useState } from 'react'
import { NewWidget, Widget } from '../../models/Widget'
import { addWidget } from '../apiClient'

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const result = { ...newWidget, [name]: value }

    return setNewWidget(result)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(newWidget)
    props.loadWidgets()
  }

  return (
    <>
      <p>Submit your Own or Else!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Widget Name:</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={newWidget.name}
        ></input>
        <br />
        <label htmlFor="price">Widget Price:</label>
        <input
          type="number"
          name="price"
          id=""
          onChange={handleChange}
          value={newWidget.price}
        ></input>
        <br />
        <label htmlFor="inStock">In Stock:</label>
        <input
          type="number"
          name="inStock"
          id=""
          onChange={handleChange}
          value={newWidget.inStock}
        ></input>
        <br />
        <label htmlFor="mfg">mfg:</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={newWidget.mfg}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidget
