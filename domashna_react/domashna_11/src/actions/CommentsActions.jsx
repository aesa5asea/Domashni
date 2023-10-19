import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "./../constants/CommentsConstants";
import axios from "axios";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments") // povik do url za comments
      .then((result) => dispatch(fetchCommentsSuccess(result.data)))
      .catch((error) => dispatch(fetchCommentsFail(error.message)));
  };
};
