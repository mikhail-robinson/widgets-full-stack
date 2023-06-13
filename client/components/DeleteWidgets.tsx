import * as Models from '../../models/Widget'
import { deleteWidget } from '../apiClient'

interface Props {
  widget: Models.Widget
  loadWidgets: () => void
  deleteWidget: (id: number) => void
}

function DeleteWidgets(props: Props) {
  async function ClickHandler() {
    console.log("id", props.widget.id);
    const result = await deleteWidget(props.widget.id)
    console.log('deleteWidget', result);
    props.loadWidgets()
  }

  return (
    <div>
      <button onClick={ClickHandler}>Delete</button>
    </div>
  )
}

export default DeleteWidgets
