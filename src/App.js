
import './App.css';
import {increment, decrement} from './redux/actions/Actions'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Welcome from './components/Welcome';
function App() {
  const dispatch = useDispatch();

  const state = useSelector(state => state)

  
  return (
    <div className="App">
      <h1>Redux Counter Application </h1>
      <p>28/07/2021</p>

      <div className="container">
        <button onClick={()=> dispatch(decrement())} className="control_icon">-</button>

        <input type="text" value={state.counter.count} readOnly/>
      
        <button onClick={()=> dispatch(increment())} className="control_icon">+</button>
      </div>
     <Welcome/>
    </div>
  );
}

export default App;
