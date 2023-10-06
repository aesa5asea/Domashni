import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div id="not-found">
      <h1>No routes match this URL.</h1>
      <h2>
        Go <Link to="/">back</Link> to posts page.
      </h2>
    </div>
  );
};
