import * as Models from '../../models/Widget'

function Widget(props: Models.Widget) {
  const { id, name, price, mfg, inStock } = props

  console.log(name.split(' ')[0].toLowerCase())
  return (
    <>
      <div
        style={{
          backgroundColor: name.split(' ')[0] || 'lightgray',
          minWidth: '400px',
          padding: '0 10px',
        }}
      >
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{mfg}</p>
        <p>In stock: {inStock}</p>
      </div>
    </>
  )
}

export default Widget
