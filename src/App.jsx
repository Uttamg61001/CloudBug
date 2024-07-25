import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import SelectCloud from './pages/Addcloud/SelectCloud'
import CloudCreds from './pages/Addcloud/CloudCreds'
import SelectService from './pages/Addservice/SelectService'
import SelectTicketTool from './pages/TicketToolSelection/SelectTicketTool'
import Dashboard from './pages/Dashboard/Dashboard'
import TicketToolCreds from './pages/TicketToolSelection/TicketToolCreds'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/select-cloud' element={<SelectCloud />} />
        <Route path='/cloud-credentials/:cloud' element={<CloudCreds />} />
        <Route path='/select-service' element={<SelectService />} />
        <Route path='/select-ticket-tool' element={<SelectTicketTool />} />
        <Route path='/ticket-tool-creds' element={<TicketToolCreds />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
