import './App.css';
import Board from './components/Board';
// import Dev from './components/Dev';
import { MadeWithLove } from './components/MadeWithLove';


function App() {
  return (
    <div className="App">
      <h1 className='text-3xl text-purple-700 font-bold text-center mt-5'>Tick Tac Toe</h1>
      <Board/>
      {/* <Dev/> */}
      <MadeWithLove/>
    </div>
  );
}

export default App;
