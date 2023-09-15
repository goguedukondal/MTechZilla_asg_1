import "./App.css";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/Signup";

import { Route, Routes } from "react-router-dom";

import Timer from "./Components/Timer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
