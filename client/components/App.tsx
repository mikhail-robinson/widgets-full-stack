import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    console.log('using the effect')

    //   fetchWidgets()
    //     .then((fetchedWidgets) => {
    //       setWidgets(fetchedWidgets)
    //     })
    //     .catch((err) => {
    //       if (err instanceof Error) {
    //         console.error(err.message)
    //       }
    //     })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
