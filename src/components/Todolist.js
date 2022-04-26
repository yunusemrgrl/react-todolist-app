import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import List from "./List/List";

function Todolist() {
  const [element, setElement] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(element);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("list"));
    setElement(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(element));
  }, [element, filteredTodo]);
  return (
    <section className="todoapp">
      <Form setElement={setElement} element={element} />
      <List
        displayElement={element}
        setDisplayElement={setElement}
        filteredTodo={filteredTodo}
      />
      <Footer
        showElement={element}
        filteredTodo={filteredTodo}
        setFilteredTodo={setFilteredTodo}
      />
    </section>
  );
}

export default Todolist;
