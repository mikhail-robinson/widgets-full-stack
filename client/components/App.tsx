import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'

function App() {
  // add use state to store widgets and import Widget type
  const [widgets, setWidgets] = useState([] as Widget[])

  // add use effect which accepts a function
  useEffect(() => {
    //API function will go here
    //. then to promise + pass a paramater which is relivent to the function
    // call setWidgets to change state
    // . catch any errors
    console.log('using the effect')
  }, [])
  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
