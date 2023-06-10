import * as Models from '../../models/Widget'
import { deleteWidget } from '../apiClient'

interface Props {
  widget: Models.Widget
}

// what am i passing as props? the id?
function DeleteWidgets(props: Props) {
  function ClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLButtonElement
    const id = target.value
    // add conditional to take the entire value of a widget

    if (id) {
      console.log('Delete Component:', props.widget)
      deleteWidget(props.widget)
    } else {
      console.log('wrong turn')
    }
  }
  return (
    <div>
      <button value={props.widget.id} onClick={ClickHandler}>
        Delete
      </button>
    </div>
  )
}

export default DeleteWidgets
