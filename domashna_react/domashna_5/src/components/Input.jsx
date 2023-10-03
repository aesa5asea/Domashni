import { useState } from "react";
import PropTypes from "prop-types";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  setToggle,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false); //
  const [isMultiLineComment, setIsMultiLineComment] = useState("false"); //

  const handleMouseDown = () => {
    setIsMouseDown(true);
    setToggle();
  }; //

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setToggle();
  }; //

  const toggleCommentMode = () => {
    event.preventDefault();
    setIsMultiLineComment(!isMultiLineComment);
  };

  return (
    <p>
      {isMultiLineComment ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      ) : (
        <textarea
          placeholder={"Enter Comments"}
          value={value}
          onChange={onChange}
          name={name}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      )}
      {name === "password" && (
        <button
          type="button"
          onMouseDown={handleMouseDown} //
          onMouseUp={handleMouseUp} //
          className="eye-button"
        >
          <i className={isMouseDown ? "fa fa-eye-slash" : "fa fa-eye"}></i>
        </button>
      )}
      {name === "comments" && (
        <button
          type={isMultiLineComment ? "text" : "textarea"} // Pass the type as textarea or text
          onClick={toggleCommentMode}
          className="eye-button"
        >
          <i
            className={isMultiLineComment ? "fa fa-comment" : "fa fa-comment-o"}
          ></i>
        </button>
      )}
    </p>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  setToggle: PropTypes.func,
};
