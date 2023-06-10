import { useEffect, useState } from "react"
import { Widget } from "../../models/Widget"
import { getWidgets } from "../apiClient"
import WidgetList from "./WidgetList"
import AddWidgetForm from "./AddWidgetForm"

const initialWidgetsArr: Widget[] = [

]

function App() {
  const [widgets, setWidgets] = useState(initialWidgetsArr as Widget[])

  useEffect(() => {
    
    loadWidgets()
  }, [])
  
  function loadWidgets(){
    getWidgets()
    .then((fetchedWidgets) => {
      setWidgets(fetchedWidgets)
      console.log("loaded widgets");
    }).catch((error) => {
      if (error instanceof Error) {
        console.error(`Something went wrong when fetching widgets`);        
      }
    })    
  }
  return (
    <>
    <div>
      <h1>Widgets for the win!</h1>
      <AddWidgetForm loadWidgets={loadWidgets} />
      <WidgetList widgets={widgets} />
    </div>
    </>
  )
}

export default App
