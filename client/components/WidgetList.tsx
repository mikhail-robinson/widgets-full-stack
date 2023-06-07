import { Widget } from "../../models/Widget"

interface Props{
  widgets: Widget[]
}

export default function WidgetList(props:Props) {
  const data = props.widgets

  return <ul>
  {data.map(widget => {
    return (
      <li key={widget.id}>{widget.name}</li>
    )
  })}
  </ul>
}