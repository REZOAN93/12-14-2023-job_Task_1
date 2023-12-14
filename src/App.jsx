import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Shared/Header/Header'

function App() {


  return (
    <div className='mainContainer'>
      <div className='bodyContainer'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
