import React, { useState, useEffect } from "react";

//Components
import Header from "./Componentes/Header";
import Todo from "./Componentes/ToDo";
import Loader from "./Componentes/Loader";

//Styles
import "./Styles/App.css";

const App = () => {
  //STATE
  const [todoList, setTodoList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  let [filterSelected, setFilterSelected] = useState([]);

  //EFFECT

  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      // setTimeout(() => {
      setTodoList(resultTodoList);
      // }, 2000);
    };
    handleTodoList();
  }, []);

  //FUNCIONES
  const handleCompleteTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filtroData = (e = filterSelected) =>{
  console.log(e);    

  setFilterSelected(e)
    
    switch (e) {
      case 'completed':
        setFilterData(todoList.filter(todo => todo.completed? todo : null))
        console.log(todoList);
        break;
      case 'uncompleted':
        setFilterData(todoList.filter(todo => !todo.completed? todo : null))
        break;
      default:
        setFilterData(todoList)
        break;
    }

  }

  useEffect(() =>{
    filtroData()
  }, [todoList] )

  return (
    <div className="App">
      <Header
      filtroData={filtroData}
      />

      <div className="todo-container">
        {todoList && todoList.length > 0 ? (
          filterData.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
              id={singleTodo.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
