
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [show,setShow]=useState(false);
  
  const onClearCart =() =>
  {
    for(var i=0;i<cartItems.length;i++)
    {
      onRemove(cartItems[i]);
    }
     setCartItems([]);
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    if(cartItems.length===0)
    {
      alert("Add product first!")
    }
    else{
    const exist = cartItems.find((x) => x.id === product.id);
    if(!exist)
    {
      alert("Add product first")
    }
    else if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }
  };
  return (
    <div className="App">
      <Navbar setShow={setShow} show={show} countCartItems={cartItems.length}></Navbar>
      <div className="row">
        <Main products={products} onAdd={onAdd} onRemove={onRemove}></Main>
        <Cart
          show={show}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onClearCart={onClearCart}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
