import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Dishes from "./components/Dishes/Dishes";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/Shop/Shop";
import Stuff from "./components/Stuff/Stuff";
import { useSelector } from "react-redux";
import { Footer } from "./components/Footer/Footer";
function App() {
  const item = useSelector(state => state?.cart?.itemList);
  console.log(item);
  return (
    <div className="App ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
