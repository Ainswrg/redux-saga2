import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCount, increaseCount } from './redux/actions/actionCreator';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(store => store?.counter?.count);
  console.log(count);

  const handleIncrease = () => {
    dispatch(increaseCount());
  };
  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
