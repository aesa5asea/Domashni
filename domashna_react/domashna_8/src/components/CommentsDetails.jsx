import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const CommentsDetails = () => {
  const [commentDetails, setCommentDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { commentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    axios
      .get("https://jsonplaceholder.typicode.com/comments/" + commentId)
      .then((res) => setCommentDetails(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [commentId]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedComment({
      ...commentDetails,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedComment({
      ...editedComment,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setError(null);

    axios
      .put(`https://jsonplaceholder.typicode.com/comments/${commentId}`, editedComment)
      .then((res) => {
        if (res.status === 200) {
          alert("Comment updated successfully");
          navigate("/comments");
        } else {
          alert(`Error: ${res.status}`);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div id="comment-details">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedComment.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={editedComment.email}
            onChange={handleInputChange}
          />
          <textarea
            name="body"
            value={editedComment.body}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <>
          <h2>{commentDetails.name}</h2>
          <h2>{commentDetails.email}</h2>
          <h2>{commentDetails.body}</h2>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};
