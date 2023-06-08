
import { deleteWidget } from '../apiClient'


interface Props {
  id: number,
  loadWidgets: () => void,
}

function DeleteWidget(props: Props) {


  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    await deleteWidget(props.id)
    props.loadWidgets()
  }





  return (
    <>

      <button type="submit" onClick={handleClick}>Delete</button>

    </>
  )
}

export default DeleteWidget
