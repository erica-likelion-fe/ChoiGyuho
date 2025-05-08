import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <div className="header_center">{title}</div>
    </header>
  );
};

export default Header;
