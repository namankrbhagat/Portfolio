import { BrowserRouter,Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
function App() {
  const [isloaded,setisLoaded] = useState(false)

  return (
    <>
    {!isloaded && <LoadingScreen onComplete={() => setisLoaded(true)}/> }
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
