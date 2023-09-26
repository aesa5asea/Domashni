import Godini from "./Components/Godini";
import Adresa from "./Components/Adresa";

const useri = [
  { ime: "Jane", prezime: "Donevski", adresa: "Prilep", godini: 16 },
  { ime: "Sara", prezime: "Spirovski", adresa: "Skopje", godini: 20 },
  { ime: "Marko", prezime: "Andreev", adresa: "Skopje", godini: 35 },
  { ime: "Marija", prezime: "Nikolova", adresa: "Ohrid", godini: 26 },
];

function App() {
  return (
    <div>
      <h1>Informacii za userite:</h1>
      <Godini useri={useri} />
      <Adresa useri={useri} />
    </div>
  );
}

export default App;
