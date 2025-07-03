import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import type { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state: RootState) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>Counter With Redux</h1>
      <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <div>{count}</div>
      <button onClick={() => handleDecrement(5)}>Decrement By 5</button>
      <button onClick={() => handleDecrement(1)}>Decrement</button>

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
