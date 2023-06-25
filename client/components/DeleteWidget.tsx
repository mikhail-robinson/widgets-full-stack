import { deleteWidget } from '../apiClient'
import { Widget } from '../../models/Widget'

interface Props {
  widget: Widget
  loadWidgets: () => void
}

function DeleteWidgetButton(props: Props) {
  async function handleClick() {
    await deleteWidget(props.widget)
    console.log(props.widget)

    props.loadWidgets()
  }

  return (
    <div>
      <button className="form-button" onClick={handleClick}>
        Delete
      </button>
    </div>
  )
}
export default DeleteWidgetButton
