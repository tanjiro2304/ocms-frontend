import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import AddMenuItemPage from './pages/AddMenuItemPage'
import AddSubscriptionPlan from './pages/AddSubscriptionPlan'
import RegisterPage from './pages/RegisterPage'
import Menubar from './components/Menubar'
import ContactUs from './pages/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Menubar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/addMenuItem" element={<AddMenuItemPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/admin/addSubscriptionPlan" element={<AddSubscriptionPlan />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
