import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/counterSlice';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counterInfo.counter)
	const show = useSelector(state => state.counterInfo.showCounter)

  const toggleCounterHandler = () => {
	  dispatch(counterActions.toggle())
  };

  const increaseHandler = () => {
	dispatch(counterActions.increase(10)); //{type:"UNIQUE",payload:10}
  }
  const incrementHandler = () => {
	dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
	dispatch(counterActions.decrement());
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
	  {show && <div className={classes.value}>{counter}</div>}
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>++</button>
      <button onClick={increaseHandler}>+10</button>
      <button onClick={decrementHandler}>--</button>
    </main>
  );
};

export default Counter;
