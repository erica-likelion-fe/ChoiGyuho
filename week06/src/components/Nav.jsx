import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="Nav">
        <Link className="navbar_menu" to={"/"}>
          create
        </Link>
        <Link className="navbar_menu" to={"/html"}>
          HTML
        </Link>
        <Link className="navbar_menu" to={"/css"}>
          CSS
        </Link>
      </div>
    </div>
  );
}

export default Nav;
