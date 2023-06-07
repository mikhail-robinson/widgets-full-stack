import { AddNewWidget } from '../../models/Widget'


function AddWidget(props : AddNewWidget) {
  const {newWidget, handleSubmit, handleChange} = props
  return (
    <>
      <form onSubmit={handleSubmit} style = {{display: 'flex', flexDirection: 'column', maxWidth: '200px'}}>
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={newWidget.name}
          className="text-slate-900"
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id=""
          onChange={handleChange}
          value={newWidget.price}
          className="text-slate-900"
        />
        <label htmlFor="mfg">Manufacturer</label>
        <input
          type="text"
          name="mfg"
          id=""
          onChange={handleChange}
          value={newWidget.mfg}
          className="text-slate-900"
        />
        <label htmlFor="inStock">Amount in Stock</label>
        <input
          type="text"
          name="inStock"
          id=""
          onChange={handleChange}
          value={newWidget.inStock}
          className="text-slate-900"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddWidget
// name: string
//   price: number
//   mfg: string
//   inStock: number
