function List({ displayElement, setDisplayElement, filteredTodo }) {
  const toggleEvent = (itemIndex) => {
    setDisplayElement(
      displayElement.map((item, index) => {
        if (itemIndex === index) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    );
  };

  const deleteButton = (itemId) =>
    setDisplayElement(displayElement.filter((item) => item.id !== itemId));

  return (
    <>
      {/* <!-- This section should be hidden by default and shown when there are todos --> */}
      <section className={displayElement == 0 ? "main hidden" : "main show"}>
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {filteredTodo.map((item, i) => (
            <li
              className={item.isCompleted === false ? "view" : "view completed"}
              key={i}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => toggleEvent(i)}
                />
                <label>{item.value}</label>
                <button
                  onClick={() => deleteButton(item.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default List;
