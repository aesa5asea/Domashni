import { useState } from "react";

export function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [position, setPosition] = useState("");
  const [showValues, setShowValues] = useState(false);

  const generateValues = () => {
    setShowValues(!showValues);
  };
  return (
    <div id="app">
      <h2>Signup forum</h2>
      <h3>Enter your name:</h3>
      <input
        type="text"
        placeholder="Enter you name."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>Enter your passowrd:</h3>
      <input
        type="text"
        placeholder="Enter you password."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <h3>Enter your email:</h3>
      <input
        type="text"
        placeholder="Enter you email."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h3>Enter your age:</h3>
      <input
        type="text"
        placeholder="Enter you age."
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <h3>Enter your position:</h3>
      <input
        type="text"
        placeholder="Enter you position."
        value={position}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
      <br />
      <br />
      <hr />
      <br />
      <button onClick={generateValues}>
        {showValues ? "Hide Values" : "Generate"}
      </button>
      {showValues && (
        <div>
          <h3>Generated Values:</h3>
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Password:</b> {password}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Age:</b> {age}
          </p>
          <p>
            <b>Position:</b> {position}
          </p>
        </div>
      )}
    </div>
  );
}
