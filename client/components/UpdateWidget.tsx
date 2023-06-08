
import { useState } from 'react'
import { Widget } from '../../models/Widget'
import { updateWidget } from '../apiClient'



interface Props {
  widget: Widget,
  loadWidgets: () => void,
}

function UpdateWidget(props: Props) {

  const [widget, setWidget] = useState(props.widget)

  function handleChangeString(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const newData = { ...widget, [name]: value }

    setWidget(newData)
  }

  function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const newData = { ...widget, [name]: Number(value) }

    setWidget(newData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await updateWidget(widget)
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
          value={widget.name}
        />
        <label htmlFor="price">Widget Price</label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChangeNumber}
          value={widget.price}
        />
        <label htmlFor="mfg">Widget Mfg</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChangeString}
          value={widget.mfg}
        />
        <label htmlFor="inStock">Widget Stock</label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChangeNumber}
          value={widget.inStock}
        />
        <label htmlFor="rating">Widget Rating</label>
        <input
          type="text"
          name="rating"
          id=""
          onChange={handleChangeNumber}
          value={widget.rating}
        />
        <button type="submit">Update</button>
      </form>

    </>
  )
}

export default UpdateWidget
