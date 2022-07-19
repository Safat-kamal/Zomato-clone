import HomePage from "./Pages/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}


export default App;