
import './App.css';
import { CartProvider } from './Context/CartContext';
import EcommerceProductCatalog from './Pages/EcommerceProductCatalog';


function App() {
  return (
    <CartProvider>
      <EcommerceProductCatalog/>
    </CartProvider>
  );
}

export default App;
