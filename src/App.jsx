import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BookDetail from "./Pages/BookDetail"; 
import GioHang from "./Pages/GioHang";
import "bootstrap/dist/css/bootstrap.min.css";
import ThanhToan from "./Pages/ThanhToan";
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "white";
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         {/* ✅ Sửa lại đường dẫn để có ID sách */}
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/giohang" element={<GioHang />} />
        <Route path="/ThanhToan" element={<ThanhToan />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
