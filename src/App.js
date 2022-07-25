import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Counter() {
	
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount((prev) => prev + 1);
	}
	const decrement = () =>{
		setCount((prev) => prev - 1);
	}

  return (
	<div>Counter App
		<button onClick={increment}>+</button>
		<button onClick={decrement}>-</button>
		<h2>{count}</h2>
	</div>
  );

}

export default Counter;
