import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slices/todoSlices';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);

  console.log("State", state);
  
  if(state.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className='App'>
        <button onClick={() => dispatch(fetchTodos())}> Fetch Todos </button>
        {
          state.data && state.data.map((e) => (<li>{e.title}</li>))
        }
      </div>
    </>
  )
}

export default App
