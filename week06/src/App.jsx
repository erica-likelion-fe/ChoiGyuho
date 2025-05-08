import { Route, Routes } from "react-router-dom";
import Web from "./pages/Web";
import Create from "./components/Create";
import Display from "./components/Display";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Web />}>
        <Route index element={<Create />} />
        <Route path="view/:postId" element={<Display />} />{" "}
        {/* 선택된 포스트의 ID를 URL에서 가져옴 */}
      </Route>
    </Routes>
  );
}

export default App;
