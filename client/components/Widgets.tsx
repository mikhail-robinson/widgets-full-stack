import * as Models from '../../models/Widget'
import DeleteWidgets from './DeleteWidget'

interface Props {
  loadWidgets: () => void
  widgets: Models.Widget[]
}

function Widgets(props: Props) {
  return (
    <div>
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
            <DeleteWidgets widget={widget} loadWidgets={props.loadWidgets} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Widgets
