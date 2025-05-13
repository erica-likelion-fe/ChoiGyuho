import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posting from "./pages/Posting";
import Posted from "./pages/Posted";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/posted/:id" element={<Posted />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
