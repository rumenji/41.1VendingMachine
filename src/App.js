import VendingMachine from "./VendingMachine";
import Snack from "./Snack";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/vending" element={<VendingMachine />} />
          <Route path="/vending/:name" element={<Snack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
