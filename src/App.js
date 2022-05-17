
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
      <h1>Redux Counter app - 28/07/2021</h1>

      <div className="container">
        <span onClick={()=> dispatch(decrement())} className="control_icon">-</span>
        <input type="text" value={state.counter.count} readOnly/>
      
        <span onClick={()=> dispatch(increment())} className="control_icon">+</span>
      </div>
     <Welcome/>
    </div>
  );
}

export default App;
