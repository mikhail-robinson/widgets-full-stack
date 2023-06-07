import React from 'react'
import { Widget } from '../../models/Widget'

interface Props {
  widget: Widget
}

function WidgetComponent({ widget }: Props) {
  return (
    <div
      key={widget.id}
      style={{
        backgroundColor: widget.name.split(' ')[0],
        width: '200px',
      }}
    >
      <h3>{widget.name}</h3>
      <p>Price: {widget.price}</p>
      <p>Manufacturer: {widget.mfg}</p>
      <p>In Stock: {widget.inStock}</p>
    </div>
  )
}

export default WidgetComponent
