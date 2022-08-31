import { useDispatch, useSelector } from "react-redux";
import { close, decrement, increment, open } from "./store";

export const App = () => {
  const { reducerCount, reducersModal } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(event());
  };
  const handleClickModal = (event) => {
    dispatch(event());
  };

  return (
    <div>
      {reducersModal && (
        <>
          <h1>Value state {reducerCount}</h1>
          <button onClick={() => handleClick(increment)}>Increment</button>
          <button onClick={() => handleClick(decrement)}>Reduce</button>
        </>
      )}
      <div>
        <button onClick={() => handleClickModal(open)}>Open</button>
        <button onClick={() => handleClickModal(close)}>Close</button>
      </div>
    </div>
  );
};
