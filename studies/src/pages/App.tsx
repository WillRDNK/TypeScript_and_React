import React from "react";
import Form from "../components/forms";
import List from "../components/list";
import Cronometro from "../components/cronometro";
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
