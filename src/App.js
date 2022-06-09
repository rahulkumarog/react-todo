import './App.css';
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { AddTodo } from './components/AddTodo';
import { useState } from 'react';

function App() {
  const [todolist, settodolist] = useState([
    {
      sno: 1,
      title: "Title1",
      desc: "Descriptions1"
    },
    {
      sno: 2,
      title: "Title2",
      desc: "Descriptions2"
    },

  ]);

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo ",title, desc);
    let sno = todolist[todolist.length-1].sno + 1;
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodolist = [...todolist, myTodos];
    console.log(myTodos);
  }

  return (
    <div className="App">
      <Header />

      <AddTodo addTodo={addTodo} />

      <Todos todolist={todolist}/>

      <Footer />
    </div>
  );
}

export default App;
