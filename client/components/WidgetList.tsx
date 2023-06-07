import { Widget } from '../../models/Widget'

interface Props {
  widgets: Widget[]
}

export default function WidgetList(props: Props) {
  const data = props.widgets

  return (
    <div className="list">
      
        {data.map((widget) => {
          return (
            <>
              <div key={widget.id} className="widgetListItem">
                <strong>Name:</strong> {widget.name}
                <strong> Price:</strong> ${widget.price}
                <strong> Manufacturer:</strong> {widget.mfg}
                <strong> Stock:</strong> {widget.inStock}
              </div>
            </>
          )
        })}

    </div>
  )
}
