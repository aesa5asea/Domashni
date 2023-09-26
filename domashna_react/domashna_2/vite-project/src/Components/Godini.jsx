// import React from "react";

function Godini({ useri }) {
  return (
    <div>
      <h2>Postari od 18 godini:</h2>
      <ul>
        {useri.map((user, index) => {
          if (user.godini > 18) {
            return (
              <li key={index}>
                {user.ime} {user.prezime}: Ima {user.godini} godini.
              </li>
            );
          } else {
            return (
              <li key={index}>
                {user.ime} {user.prezime}: Ima pomalku od 18 godini.
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Godini;
