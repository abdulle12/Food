
import React, { useState } from 'react'
import Button from './assets/components/Button'
import Alert from './assets/components/Alert'

const App = () => {
  const[Alertvissible,setAlertvissiblity]=useState(false)
  return (
    <div>
      {Alertvissible && <Alert onClose={() => setAlertvissiblity(false)} > My new Alert</Alert>}
      <Button onClick={()=> {setAlertvissiblity(true)}}> My button </Button></div>
  )
}

export default App