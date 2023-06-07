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
            
              <div key={widget.name} className="widgetListItem">
                Name: {widget.name}
                 Price: ${widget.price} 
                 Manufacturer: {widget.mfg} 
                 Stock: {widget.inStock} 
              </div>
            
          )
        })}

    </div>
  )
}
