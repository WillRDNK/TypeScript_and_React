import React, { useState } from "react";
import style from "./list.module.scss";
import Item from "./item";
function List() {
  let [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "04:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "03:00:00",
    },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={()=>{
        setTarefas([...tarefas, {tarefa: "Estudar States", tempo: "02:08:30"}]);
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item}
          key={index} />
        ))}
      </ul>
    </aside>
  );
}
export default List;
