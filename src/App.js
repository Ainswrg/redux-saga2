import React from 'react';
// import { useSelector } from 'react-redux';

const App = () => {
  // const store = useSelector((state) => state);
  // console.log(store);

  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
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
