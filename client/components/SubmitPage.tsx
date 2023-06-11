import { Link } from 'react-router-dom'
import AddWidgetForm from './AddWidget'

interface Props {
  loadWidgets: () => void
}

interface Form {
  toggleForm: () => void
}
function SubmitPage(props: Form) {
  return (
    <div>
      <h2>You have successfully submitted a new widget! 🥳🥳🥳</h2>
      <Link to={'/'} className="form-button" onClick={props.toggleForm}>
        Add another Widget
      </Link>
    </div>
  )
}

export default SubmitPage
