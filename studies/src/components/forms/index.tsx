import React from "react";
import Button from "../button";
import "./style.scss";

class Form extends React.Component {
  render() {
    return (
      <form className="novaTarefa" action="">
        <div className="inputContainer">
          <label htmlFor="tarefa"> Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que voce vai querer estudar"
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            step="1"
            id="tempo"
            min="00:00:00"
            max="01:03:00"
            required
          />
        </div>

        <Button />
      </form>
    );
  }
}
export default Form;
