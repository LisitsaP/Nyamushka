import "./scss/libs/app.scss";
import Header from "./components/Header";
import Packages from "./components/Packages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Packages className="it" />
      </div>
    </div>
  );
}

export default App;
