import { useState } from 'react'
import './App.css'
// import Header from './Header'

export default function Mycomponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome to MY Component Page : {count}</h1>
    </div>
  )
}


// export default Mycomponent;
