import { useState, useEffect } from "react";

const setBackDefault = { value: "", id: "", isCompleted: false };

function Form({ setElement, element }) {
  const [form, setForm] = useState(setBackDefault);
  const id = new Date().getTime().toString();

  useEffect(() => {
    setForm(setBackDefault);
  }, [element]);

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, id: id });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (form.value.trim() == "") {
      return false;
    }

    setElement([...element, form]); // ***  use "[]" array ****//
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handlerSubmit}>
          <input
            name="value"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={handlerChange}
            autoFocus
            value={form.value}
            autoComplete="off"
          />
        </form>
      </header>
    </div>
  );
}

export default Form;
