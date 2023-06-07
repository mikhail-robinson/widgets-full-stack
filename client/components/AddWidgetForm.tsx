import { useState } from 'react'

export default function AddWidgetForm() {
  const [widgetData, setWidgetData] = useState({
    name: '',
    price: '',
    mfg: '',
    inStock: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value

    const newData = { ...widgetData, [name]: value }

    setWidgetData(newData)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(event)

    console.log(widgetData)
  }

  return (
    <>
      <h2>Add a Widget</h2>
      <form action={handleSubmit} className="form flex">
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={widgetData.name}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={handleChange}
          value={widgetData.price}
        />
        <label htmlFor="mfg">Manufacturer</label>
        <input
          type="text"
          name="mfg"
          id="mfg"
          onChange={handleChange}
          value={widgetData.mfg}
        />
        <label htmlFor="inStock">In Stock</label>
        <input
          type="text"
          name="stock"
          id="inStock"
          onChange={handleChange}
          value={widgetData.inStock}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
