import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { RootState } from "@/redux/store";

export default function Counter() {
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
      <h1>Counter With Redux</h1>
      <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <div>{count}</div>
      <button onClick={() => handleDecrement(5)}>Decrement By 5</button>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
    </>
  );
}
