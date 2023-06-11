import AddWidgetForm from './AddWidget'

function SubmitPage() {
  return (
    <div>
      <h2>You have successfully submitted a new widget! 🥳🥳🥳</h2>
      <AddWidgetForm loadWidgets={loadWidgets} />
    </div>
  )
}

export default SubmitPage
