import { useState, useEffect } from "react";
import { Input } from "./Input";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const [selectedOption, setSelectedOption] = useState(""); //
  const [comments, setComments] = useState(""); //

  useEffect(() => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Selected Option:", selectedOption); //
    console.log("Comment:", comments); //
  });

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function showValues(event) {
    event.preventDefault();
    alert(
      `Username: ${username}\nPassword: ${password}\nSelected Option: ${selectedOption}\nComments: ${comments}`
    ); //
  }

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const elements = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  return (
    <div id="login">
      <form>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          name={"password"}
          value={password}
          setToggle={handleInputChange}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <select
          onChange={handleDropdownChange}
          value={selectedOption}
        >
          {elements.map((element) => (
            <option
              key={element.value}
              value={element.value}
            >
              {element.name}
            </option>
          ))}
        </select>

        <Input
          type={"text"}
          placeholder={"Enter Comment"}
          name={"comments"}
          value={comments}
          setToggle={handleInputChange}
          onChange={(e) => setComments(e.target.value)}
        />

        <button
          className="action-button"
          onClick={showValues}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
