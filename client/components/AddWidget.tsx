import { useState } from 'react'
import { NewWidget, Widget } from '../../models/Widget'
import { addWidget } from '../apiClient'

// import function as type void

interface Props {
  loadWidgets: () => void
}

function AddWidget(props: Props) {
  // declare the type explicitly within set state function
  const [newWidget, setNewWidget] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  } as NewWidget)

  // handle change - when data changes within the input
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const result = { ...newWidget, [name]: value }

    return setNewWidget(result)
  }

  // handle submit - when button is clicked on submit
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // dot into event and prevent default action
    event.preventDefault()
    // await call your API
    await addWidget(newWidget)
    // props.your function to call
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
