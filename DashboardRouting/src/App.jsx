import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link,Outlet} from 'react-router-dom';

const Home=()=>{
  return <h1>HOME</h1>;
}
const About=()=>{
  return <h1>ABOUT</h1>;
}
const Dashboard=()=>{

  return (
  <div>
  <h1>DASHBOARD</h1>
  <Outlet/>
  </div>

  )
}
const Profile=()=>{
  return <h1>PROFILE</h1>;
}
const Settings=()=>{
  return <h1>SETTINGS</h1>;
}
const Contact=()=>{
  return <h1>CONTACT</h1>;
}

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
