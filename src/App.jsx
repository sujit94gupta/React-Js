import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Mycomponent from './Mycomponent'




function App() {
    const [name, setName] = useState('');

    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
      </div>
    );
}



export default App
