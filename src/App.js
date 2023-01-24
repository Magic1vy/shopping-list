import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg';
import './ShoppingList.js';
import { ShoppingList } from './ShoppingList.js';

function App() {
  return (
    <div>
      <div className='app'>
        <img src={image} alt="shopping" width="200px" />
        <h1>Grocery List</h1>
        <ShoppingList />
        <img src={imageTwo} alt="man" width="200px"/>
      </div>
      
    </div>
  );
}

export default App;
