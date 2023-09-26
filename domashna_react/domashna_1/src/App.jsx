import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

function App() {
  return (
    <body>
      <div className="app">
        <div className="background_overlay"></div>
        <Logo />
        <Header />
      </div>
    </body>
  );
}
export default App;
