// import React from "react";

function Adresi({ useri }) {
  return (
    <div>
      <h2>Useri sto zhiveat so Skopje:</h2>
      <ul>
        {useri.map((user, index) => {
          if (user.adresa === "Skopje") {
            return (
              <li key={index}>
                {user.ime} {user.prezime} : Adresa: {user.adresa}.
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export default Adresi;
