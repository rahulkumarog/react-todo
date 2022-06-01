import './App.css';
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";

function App() {
  let todolist = [
    {
      sno: "1",
      title: "Title1",
      desc: "Descriptions1"
    },
    {
      sno: "2",
      title: "Title2",
      desc: "Descriptions2"
    },
    {
      sno: "3",
      title: "Title3",
      desc: "Descriptions3"
    },
  ]
  return (
    <div className="App">
      <Header />

      <Todos 
      todolist={todolist} 
      />

      <Footer />
    </div>
  );
}

export default App;
