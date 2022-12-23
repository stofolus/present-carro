import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FullPage } from "./FullPage";

function App() {
  const [count, setCount] = useState(0);

  return <FullPage />;
}

export default App;
