import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ posts, setSelectedPost }) => {
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <div className="Nav">
        <Link to="/" className="navbar_menu">
          create
        </Link>

        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => (
              <Link
                key={index}
                to={`/view/${index}`}
                onClick={() => handlePostClick(post)}
                className="navbar_menu"
              >
                {post.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
