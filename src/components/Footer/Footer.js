import { useEffect, useState } from "react";

function Footer({ showElement, setFilteredTodo }) {
  const [filterType, setFilterType] = useState(0);

  useEffect(() => {
    if (filterType === 1) {
      setFilteredTodo(showElement.filter((item) => item.isCompleted === false));
    } else if (filterType === 2) {
      setFilteredTodo(showElement.filter((item) => item.isCompleted));
    } else {
      setFilteredTodo(showElement);
    }
    // console.log(todo)
  }, [filterType, showElement]);

  return (
    <>
      {/* <!-- This footer should hidden by default and shown when there are todos --> */}
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={() => setFilterType(0)}
              className={filterType === 0 ? "selected" : ""}
              id="all"
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilterType(1)}
              id="active"
              className={filterType === 1 ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilterType(2)}
              id="completed"
              className={filterType === 2 ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  );
}

export default Footer;
