import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
import './App.css'
function App() {
  return (
    <div className="b">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
