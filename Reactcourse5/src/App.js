import Counter from './Counter.js'
import TodoList from './TodoList.js'
import ProductList from './ProductList.js'
import './App.css';
import NoteList from './NoteList.js';

function App() {
  
  return (
    <div className="container">
      <div className='row text-center'>
        <div className='col-12 mb-5'>
        <Counter/>
        </div>
        <div className='col-4 mb-5'>
        <TodoList/>
        </div>
        <div className='col-9 text-center mb-5'>
        <ProductList/>
        </div>
         <div className='col-4 mb-5'>
        <NoteList/>
        </div> 
      </div>
    </div>
  );
}

export default App;
