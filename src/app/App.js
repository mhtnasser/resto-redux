import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import { Cart } from '../features/cart/Cart';
import { Total } from '../features/total/Total';
import { Voucher } from '../features/voucher/Voucher';
import { Owner } from '../features/owner/Owner';
import { Menu } from '../features/menu/Menu';
import { Notes } from '../features/notes/Notes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Menu />
          <Cart />
          <Total />
          <Voucher />
          <Owner />
          <Notes />
      </div>
    </Provider>
  );
}

export default App;
