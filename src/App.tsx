import { Route, BrowserRouter as Router, Routes } from "react-router";
import './App.css';
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route element={<AppLayout />} >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App 
