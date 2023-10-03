import { useState } from "react";

export const Domashno = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [showValues, setShowValues] = useState(false);

  return (
    <div id="domashno">
      <p>Domashno</p>
      <input
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setShowValues(!setShowValues);
        }}
      >
        {showValues === true ? "Hide table" : "Show Table"}
      </button>
      <br />
      <br />
      {showValues && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{age}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
