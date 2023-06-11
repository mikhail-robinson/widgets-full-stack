import { Link } from 'react-router-dom'

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

      <img
        className="party-gif"
        src="https://media0.giphy.com/media/9rMvwuIpMBKU0/giphy.gif?cid=ecf05e476gxa41puma2ggc5zgqqssv2ov4mwwsu6a2zbl1r1&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="party-gif"
      />
      <Link to={'/'} className="form-button" onClick={props.toggleForm}>
        Add another Widget
      </Link>
    </div>
  )
}

export default SubmitPage
