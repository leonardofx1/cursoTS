import { useContext } from "react";

import { InfoContex } from "./components/Main/index";

function App() {
  const Person = useContext(InfoContex);

  return <>{Person && <h1>{Person.age}</h1>}</>;
}

export default App;
