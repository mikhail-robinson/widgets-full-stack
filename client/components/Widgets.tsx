import * as Models from '../../models/Widget'

interface Props {
  widgets: {
    name: string
    price: number
    mfg: number
    inStock: number
  }
}

function Widget(props: Props) {
  const { widgets } = props

  function clickHandler(name: string) {
    
  }
  //console.log(name.split(' ')[0].toLowerCase())
  return (
    <>
      {widgets.map((widget) => (
        <div
          key={widget.name}
          style={{
            backgroundColor: widget.name.split(' ')[0] || 'lightgray',
            minWidth: '400px',
            padding: '0 10px',
          }}
        >
          <h3>{widget.name}</h3>
          <p>${widget.price}</p>
          <p>{widget.mfg}</p>
          <p>In stock: {widget.inStock}</p>
          <button onClick={() => clickHandler(widget.name)}>Delete</button>
        </div>
      ))}
      <p>{props.widgets.name}</p>
      {/* <div
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
      </div> */}
    </>
  )
}

export default Widget
