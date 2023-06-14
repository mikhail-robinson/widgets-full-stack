import * as Models from '../../models/Widget'
import { deleteWidget } from '../apiClient'

interface Props {
  widget: Models.Widget
  loadWidgets: () => void
}

function DeleteWidgets(props: Props) {
  async function handleClick() {
    await deleteWidget(props.widget)
    props.loadWidgets()
  }

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default DeleteWidgets
