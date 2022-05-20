import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function List({
  displayElement,
  setDisplayElement,
  filteredTodo,
}) {
  const toggleEvent = (id) => {
    setDisplayElement(
      displayElement.map((item) => {
        if (id === item.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      }),
    );
  };

  const handlerChange = () => {
    const every = displayElement.every(
      (item) => item.isCompleted === true,
    );
    setDisplayElement(
      displayElement.map((item) => {
        if (every) {
          item.isCompleted = !item.isCompleted;
        } else {
          item.isCompleted = true;
        }
        return item;
      }),
    );
  };
  const deleteButton = (itemId) =>
    setDisplayElement(
      displayElement.filter((item) => item.id !== itemId),
    );

  const handleEdit = (id) => {
    displayElement.filter((item) => {
      if (id === item.id) {
        console.log(id);
      }
    });
  };

  return (
    <section
      className={
        displayElement.length === 0
          ? 'main hidden'
          : 'main show'
      }
    >
      <input className="toggle-all" type="checkbox" />
      <label onClick={handlerChange} htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filteredTodo.map((item, i) => (
          <li
            className={
              item.isCompleted === false
                ? 'view'
                : 'view completed'
            }
            key={i}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => toggleEvent(item.id)}
              />
              <label>{item.value}</label>
              <div>
                <FontAwesomeIcon
                  className="icon"
                  icon={faEdit}
                  onClick={() => handleEdit(item.id)}
                />
              </div>
              <button
                onClick={() => deleteButton(item.id)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
