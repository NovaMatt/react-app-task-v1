import {useEffect, useState, createContext } from "react";
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext(null);
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider value={{tasks,createTask,deleteTask}}>
      {props.children}
    </TaskContext.Provider>
  );
}
