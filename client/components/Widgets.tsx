import * as Models from '../../models/Widget'
import DeleteWidgets from './DeleteWidget'

interface Props {
  widgets: Models.Widget[]
}

function Widgets(props: Props) {
  return (
    <div>
      {/* map through and display all widgets in this space by calling props */}
      <ul>
        {props.widgets.map((widget) => (
          <li key={widget.id}>
            Name: {widget.name}
            <br />
            Stock: {widget.inStock}
            <br />
            Price: ${widget.price}
            <br />
            MFG: {widget.mfg}
            <br />
            <DeleteWidgets widget={widget} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Widgets
