
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
        <div>
          <label htmlFor="name">Widget Name</label> <br />
          <input
            type="text"
            name="name"
            id=""
            onChange={handleChangeString}
            value={widget.name}
          />
        </div>
        <div>
          <label htmlFor="price">Widget Price</label> <br />
          <input
            type="text"
            name="price"
            id=""
            onChange={handleChangeNumber}
            value={widget.price}
          />
        </div>
        <div>
          <label htmlFor="mfg">Widget Mfg</label> <br />
          <input
            type="text"
            name="mfg"
            id=""
            onChange={handleChangeString}
            value={widget.mfg}
          />
        </div>
        <div>
          <label htmlFor="inStock">Widget Stock</label> <br />
          <input
            type="text"
            name="inStock"
            id=""
            onChange={handleChangeNumber}
            value={widget.inStock}
          />
        </div>
        <div>
          <label htmlFor="rating">Widget Rating</label> <br />
          <input
            type="text"
            name="rating"
            id=""
            onChange={handleChangeNumber}
            value={widget.rating}
          />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>

    </>
  )
}

export default UpdateWidget
