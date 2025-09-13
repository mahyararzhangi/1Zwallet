import "./App.css";
import { HomePage } from "../../Pages/HomePage";
import DownloadPage from "../../Pages/DownloadPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      {/* Menu */}
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </Router>

      {/* Footer */}
      <Footer />
      {/* <FetchApi /> */}
    </>
  );
}

export default App;
