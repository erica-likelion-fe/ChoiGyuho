import { useState } from "react";

const Header = ({ text }) => {
  const [num, setNum] = useState(0);
  const [test, setTest] = useState("");
  return <header>{text}</header>;
};

export default Header;
