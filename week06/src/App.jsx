import "./App.css";
import { Routes, Route } from "react-router-dom";
import Web from "./pages/Web";
import NotFound from "./pages/NotFound";
import Create from "./components/Create";
import Html from "./components/Html";
import Css from "./components/Css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route index element={<Create />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
