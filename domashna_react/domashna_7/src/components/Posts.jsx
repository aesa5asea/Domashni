import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Posts = ({ postsList }) => {
  return (
    <div id="posts">
      <h1>Posts</h1>
      <Link to="/">Home</Link>
      {postsList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {postsList.map((posts) => (
              <tr key={posts.id}>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

Posts.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.object),
};
