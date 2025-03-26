import { useEffect } from "react";

import "./App.css";
import CertificateGenerator from "./CertificateGenerator";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Plausible from "plausible-tracker";

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    const plausible = Plausible({
      domain: "s-corp.lol",
      trackLocalhost: true,
    });
    plausible.enableAutoPageviews();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gen" element={<CertificateGenerator />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
