import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { updateFilter } from "@/redux/features/task/taskSlice";
// import { selectTasks } from "@/redux/features/task/taskSlice";
// import { selectFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
// import {  useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";

export default function Tasks() {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log(data, isLoading, isError);

  // const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  // const filter = useAppSelector(selectFilter);

  // console.log(tasks);
  // console.log(filter);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="mx-auto max-w-7xl px-5 mt-20
    ">
      <div className="justify-end gap-5 items-center flex">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="All" className="">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All">
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High">
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium">
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low">
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading &&
          data.tasks.map((task: ITask) => {
            return <TaskCard key={task.id} task={task}></TaskCard>;
          })}
      </div>
    </div>
  );
}
