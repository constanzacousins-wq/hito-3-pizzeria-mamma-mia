import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

// import Home from "./views/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />

      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}

      <Cart />

      <Footer />
    </>
  );
}

export default App;