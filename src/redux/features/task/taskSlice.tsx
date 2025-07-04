import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "kqT1mErFNTfQL9cW8ajoC",
      title: "Initialize Frontend",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "High",
      assignedTo: null,
    },
    {
      id: "kqT1mErFNTfQL9cW8ajoD",
      title: "GitHub",
      description: "Create GitHub Account",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
      assignedTo: null,
    },
  ],
  filter: "All",
};

export type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    ...taskData,
    isCompleted: false,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"All" | "High" | "Medium" | "Low">
    ) => {
      console.log(action);
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "High")
    return state.todo.tasks.filter((task) => task.priority === "High");
  if (filter === "Medium")
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  if (filter === "Low")
    return state.todo.tasks.filter((task) => task.priority === "Low");
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
