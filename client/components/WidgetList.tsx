import { Widget } from "../../models/Widget"

interface Props{
  widgets: Widget[]
}

export default function WidgetList(props:Props) {
  const data = props.widgets

  return <div className="list">
    <ul>
    {data.map(widget => {
      return (<>
        <div className="widgetListItemContainer">
          <li key={widget.id}><ul>
            <li className="widgetListItem"><strong>Name:</strong> {widget.name}</li> <strong>Price:</strong> ${widget.price} <li className="widgetListItem"><strong>Manufacturer:</strong> {widget.mfg}</li> <li className="widgetListItem"><strong>Stock:</strong> {widget.inStock}</li>
          </ul></li>
        </div>
        </>)
    })}
    </ul>
  </div>
}