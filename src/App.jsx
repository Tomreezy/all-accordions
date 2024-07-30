import FistComponents from "./components/FirstComponents"
import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/PageWithState"
import NavBar from "./components/NavBar"
import PageWithoutSelect from "./pages/PageWithOutSelect"
import PageWithSelect from "./pages/PageWithSelect"


function App() {


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/without_state" element={<PageWithoutSelect />} />
        <Route path="/select" element={<PageWithSelect />} />
      </Routes>
    </div>
  )
}

export default App
