import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul id="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Gallery">Go to Gallery</Link>
      </li>
      <li>
        <Link to="/Albums">Go to Albums</Link>
      </li>
    </ul>
  );
};
