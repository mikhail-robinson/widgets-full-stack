import * as Models from '../../models/Widget'
import { deleteWidget } from '../apiClient'

interface Props {
  widget: Models.Widget
  loadWidgets: () => void
}

function DeleteWidgets(props: Props) {
  async function ClickHandler() {
    await deleteWidget(props.widget.id)
    props.loadWidgets()
  }

  return (
    <div>
      <button onClick={ClickHandler}>Delete</button>
    </div>
  )
}

export default DeleteWidgets
