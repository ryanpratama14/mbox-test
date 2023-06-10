import React from "react";
import { Icon } from "@iconify/react";
import { dateFormat } from "../utils";

type Props = {
  todo: TodosItems;
  index: number;
  addTodo: boolean;
  selectedTodo: number[];
  handleSelect: (index: number) => void;
  markTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
  closeAddTodo: () => void;
};

export default function TodoItem({
  todo,
  index,
  addTodo,
  selectedTodo,
  handleSelect,
  markTodo,
  deleteTodo,
  closeAddTodo,
}: Props): React.JSX.Element {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 rounded">
      <aside className="flex gap-4 items-center">
        <button
          onClick={() => {
            handleSelect(index);
            addTodo ? closeAddTodo() : null;
          }}
          className={`relative animate p-0 text-white
        ${selectedTodo.includes(index) ? "bg-blue-500" : "bg-gray-200"}
        `}
        >
          <Icon
            icon="material-symbols:check"
            width={25}
            className={`animate ${
              selectedTodo.includes(index)
                ? "scale-100"
                : "translate-y-6 scale-0"
            }`}
          />
        </button>
        <div
          className={`flex flex-col gap-1 ${
            todo.completed ? "line-through" : ""
          }`}
        >
          <h4>{todo.title}</h4>
          <h5>{dateFormat(todo.date)}</h5>
        </div>
      </aside>
      <div className="flex gap-2">
        {todo.completed ? null : (
          <button
            onClick={() => markTodo(index)}
            className="bg-green-600 text-white px-2"
          >
            <Icon icon="material-symbols:done-all" width={25} />
          </button>
        )}
        <button
          onClick={() => deleteTodo(index)}
          className="bg-red-500 text-white px-2"
        >
          <Icon icon="material-symbols:delete" width={25} />
        </button>
      </div>
    </div>
  );
}
