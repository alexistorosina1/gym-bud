import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";


function App() {
  

  return (
    <>
      <h1>Hello</h1>
      <Routes>
          <Route path="/" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
