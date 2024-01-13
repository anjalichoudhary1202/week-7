
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(()=> import('./components/Dashboard'))
const Landing = React.lazy(()=> import('./components/Landing'))

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes >
      </BrowserRouter>
    </div>
  )
}

function Appbar() {

  const navigate = useNavigate(); // cannot use outside browerrouter
  return (
    <div>
        <button onClick={()=>{
          // window.location.href = "/";
          navigate("/");
        }}>Landing page</button>

        <button onClick={()=>{
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}>Dashboard page</button>
      </div>
  );
}
export default App
