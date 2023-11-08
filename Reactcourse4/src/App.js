import Counter from './Counter.js'
import TodoList from './TodoList.js'
import ProductList from './ProductList.js'
import './App.css';

function App() {
  
  return (
    <div className="container">
      <div className='row'>
        <div className='col-4'>
        <Counter/>
        </div>
        <div className='col-4'>
        <TodoList/>
        </div>
        <div className='col-4'>
        <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default App;
