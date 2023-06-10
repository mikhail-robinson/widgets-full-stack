import { Widget } from "../../models/Widget";

interface Props {
  data: Widget
}

export default function widgetListItem(props:Props) {
  const widget = props.data

  return (
    <>
      <ul key={widget.name} className="widgetListItem">
        <li><strong>Name:</strong> {widget.name}</li>
        <li><strong>Price:</strong> ${widget.price}</li>
        <li><strong>Manufacturer:</strong> {widget.mfg}</li>
        <li><strong>Stock:</strong> {widget.inStock}</li>
      </ul>
    </>
  )
}