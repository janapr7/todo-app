import { twMerge } from "tailwind-merge";
import useTodoStore from "../store/todoStore";
import useDarkModeStore from "../store/darkModeStore";
import useActiveMenuStore from "../store/activeMenuStore";
import TodoItem from "./TodoItem";
import StatusMenu from "./StatusMenu";
import sunIcon from "../asset/icon/icon-sun.svg";
import moonIcon from "../asset/icon/icon-moon.svg";
import CircleIcon from "./CircleIcon";

export default function TodoContainer({ dark }) {
  const { todos, count, setTodos, addTodo, removeAllCompleted } = useTodoStore();
  const { setDarkMode } = useDarkModeStore();
  const { activeMenu } = useActiveMenuStore();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const todoData = JSON.parse(e.dataTransfer.getData("text/plain"));
    const targetIndex = e.target.dataset.index;

    const currentIndex = todos.findIndex((object) => {
      return object.timestamp == todoData.timestamp;
    });

    if (targetIndex != undefined || targetIndex != currentIndex) {
      const newOrder = [...todos];
      const [movedElement] = newOrder.splice(currentIndex, 1);

      newOrder.splice(targetIndex, 0, movedElement);
      setTodos(newOrder);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  const handleClick = async () => {
    const task = document.getElementById("task").value;
    if (task.length >= 1) {
      addTodo(task);
      document.getElementById("task").value = "";
    }
  };

  return (
    <>
      <div className="text-lg justify-center mx-auto py-2 sm:py-20 max-w-xs sm:max-w-lg relative z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-lVLGray font-bold text-2xl sm:text-4xl tracking-[.5em]">
            TODO
          </h1>
          <button type="button" onClick={setDarkMode}>
            <img
              src={dark ? sunIcon : moonIcon}
              className="h-8 w-8"
              alt="set mode"
            />
          </button>
        </div>

        <div
          className={twMerge(
            "w-full text-lDGrayishBlue flex justify-start items-center p-3 my-5 rounded-lg bg-lVLGrayishBlue",
            dark && "bg-dVLGrayishBlue"
          )}
        >
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex text-start items-center w-full">
              <button type="button" onClick={handleClick}>
                <CircleIcon dark={dark} />
              </button>
              <div
                className={twMerge(
                  "mx-3 text-dVLGray text-lg w-full",
                  dark && "text-lVLGray"
                )}
              >
                <input
                  type="text"
                  name="task"
                  id="task"
                  autoComplete="off"
                  className={twMerge(
                    "appearance-none border-none focus:outline-none w-full bg-lVLGrayishBlue",
                    dark && "bg-dVLGrayishBlue"
                  )}
                  placeholder="Create a new todo..."
                />
              </div>
            </div>
          </form>
        </div>

        <div
          className={twMerge(
            "rounded-t-lg  bg-lVLGrayishBlue",
            dark && "bg-dVLGrayishBlue"
          )}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
        >
          {todos
            .filter((item) => {
              if (activeMenu === "All") {
                return true;
              } else if (activeMenu === "Active") {
                return !item.completed;
              } else if (activeMenu === "Completed") {
                return item.completed;
              }
              return false;
            })
            .map((item, index) => (
              <TodoItem
                text={item.text}
                completed={item.completed}
                timestamp={item.timestamp}
                index={index}
                dark={dark}
              />
            ))}
        </div>
        <div
          className={twMerge(
            "text-base text-lDGrayishBlue flex justify-between items-center p-3 rounded-b-lg bg-lVLGrayishBlue",
            dark && "bg-dVLGrayishBlue"
          )}
        >
          <div className="">{count} items left</div>
          <div className="flex items-center text-center hidden sm:block">
            <StatusMenu text={"All"} active={activeMenu == "All"} dark={dark} />
            <StatusMenu
              text={"Active"}
              active={activeMenu == "Active"}
              dark={dark}
            />
            <StatusMenu
              text={"Completed"}
              active={activeMenu == "Completed"}
              dark={dark}
            />
          </div>
          <button
            type="button"
            className={
              dark
                ? "hover:text-dLGrayishBlueHover"
                : "hover:text-lVDGrayishBlue"
            }
            onClick={removeAllCompleted}
          >
            Clear Completed
          </button>
        </div>
        <div
          className={twMerge(
            "text-lDGrayishBlue flex justify-center items-center p-3 my-5 rounded-lg bg-lVLGrayishBlue sm:hidden",
            dark && "bg-dVLGrayishBlue"
          )}
        >
          <div className="flex items-center text-center">
            <StatusMenu text={"All"} active={activeMenu == "All"} dark={dark} />
            <StatusMenu
              text={"Active"}
              active={activeMenu == "Active"}
              dark={dark}
            />
            <StatusMenu
              text={"Completed"}
              active={activeMenu == "Completed"}
              dark={dark}
            />
          </div>
        </div>
      </div>
    </>
  );
}
