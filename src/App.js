import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCount, increaseCount, getLatestNews } from './redux/actions/actionCreator';

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
  const handleGetNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleGetNews}>Get News</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
