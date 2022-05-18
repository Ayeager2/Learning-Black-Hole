import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
