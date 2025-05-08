import { useState } from "react";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const [list, setList] = useState(["html", "css", "js"]);

  return (
    <div>
      <Header text={"내가 원하는 것을 출력합니다."} />
      <Nav />
      <nav>{list.map((item) => {})}</nav>
      <Article />
    </div>
  );
}

export default App;
