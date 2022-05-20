import { useEffect, useState } from 'react';

function Footer({
  showElement,
  setFilteredTodo,
  deleteCompleted,
}) {
  const [filterType, setFilterType] = useState(0);

  useEffect(() => {
    if (filterType === 1) {
      setFilteredTodo(
        showElement.filter(
          (item) => item.isCompleted === false,
        ),
      );
    } else if (filterType === 2) {
      setFilteredTodo(
        showElement.filter((item) => item.isCompleted),
      );
    } else {
      setFilteredTodo(showElement);
    }
  }, [filterType, showElement]);

  const handlerDelete = () => {
    deleteCompleted(
      showElement.filter((item) => !item.isCompleted),
    );
  };

  return (
    <>
      {/* <!-- This footer should hidden by default and shown when there are todos --> */}
      <footer
        className={
          showElement.length == 0
            ? 'footer hidden'
            : 'footer show'
        }
      >
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong className="item-left">
            {
              showElement.filter(
                (item) => !item.isCompleted,
              ).length
            }
          </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <span
              onClick={() => setFilterType(0)}
              className={filterType === 0 ? 'selected' : ''}
              id="all"
            >
              All
            </span>
          </li>
          <li>
            <span
              onClick={() => setFilterType(1)}
              id="active"
              className={filterType === 1 ? 'selected' : ''}
            >
              Active
            </span>
          </li>
          <li>
            <span
              onClick={() => setFilterType(2)}
              id="completed"
              className={filterType === 2 ? 'selected' : ''}
            >
              Completed
            </span>
          </li>
        </ul>

        <button
          className={
            filterType === 1
              ? 'clear-completed hidden '
              : 'clear-completed show '
          }
          onClick={handlerDelete}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Footer;
