import Home from "./pages/Home";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Favorite from "./pages/Favorite";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={'Not Found'} />
      </Routes>
    </div>
  );
}

export default App;
