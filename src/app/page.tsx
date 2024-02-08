"use client";

import { todoItem } from "@/types/todoItem";
import { useState } from "react";

function ExemploComponente() {
  //Recebento o item que se quer adicionar
  const [itemInput, setItemInput] = useState("");
  // Declaração array de objectos em States
  const [list, setList] = useState<todoItem[]>([]);

  //Adicionando elementos no array
  const handleAddButton = () => {
    {
      itemInput === ""
        ? alert("Digite alguma tarefa")
        : setList([...list, { label: itemInput, checked: false }]);
    }
    setItemInput("");
  };

  //Eliminando um item do array
  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index));
  };

  //Alterar um Status no Array
  const toggleItem = (index: number) => {
    let newList = [...list];
    for (let i = 0; i < newList.length; i++){
      if (index === i){
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList);
  }

  return (
    <main className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border p-3 text-2xl rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button className="py-2 px-3" onClick={handleAddButton}>
          Adicionar
        </button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li className="mt-3" key={index}>
            <input type="checkbox" className="h-4 w-4 mr-2" checked={item.checked} onClick={()=> toggleItem(index)}/>
            {item.label} {item.checked} -{" "}
            <button
              className="hover:text-white hover:bg-slate-500 font-bold first-letter:capitalize bg-slate-700 py-1 px-3 rounded-md"
              onClick={() => deleteItem(index)}
            >
              [deletar]
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default ExemploComponente;
