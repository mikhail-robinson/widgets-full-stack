import { useId } from 'react'
import { Widget } from '../../models/Widget'
import WidgetListItem from './WidgetListItem'

interface Props {
  widgets: Widget[]
}

export default function WidgetList(props: Props) {
  const data = props.widgets
  

  return (
    <div className="list flex">
      
        {data.map((widget, i) => {
          return (
          <>
            <WidgetListItem key={widget.name} data={widget} />
          </>
          )
        })}

    </div>
  )
}
