import "./App.css";
import { Routes, Route } from "react-router-dom";
import Web from "./pages/Web";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
