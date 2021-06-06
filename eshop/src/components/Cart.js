import React from 'react';


export default function Cart(props) {
  console.log(props.show)
  const { cartItems, onAdd , onRemove, onClearCart} = props;
  const price=cartItems.reduce((a, c) => a + c.qty * c.price, 0);
 
  
  const delivery = 10;
  const totalPrice = price + delivery;

  
  if(!props.show)
  {
     return null;
  }
  if(cartItems===[])
  {
    return null;
  }
  if(cartItems.length===0 && props.show)
  {
    return(<div className="block"> <hr></hr> Cart is empty  <hr></hr></div>)
  }
  if(cartItems.length!==0 && props.show){
  return (
    <aside className="block col1">
      <h2>Cart Items</h2>
      <div>
        
        {cartItems.length === 0 && <div>Cart is empty</div>}
        
        { cartItems.length !== 0 &&  cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col2">
            <img className="small1" src={item.image} alt={item.name} />
            </div>
            <div className="col2">{item.name}</div>
            <div>
            <button onClick={() => onRemove(item)} className="remove">
                -
        </button>{' '}
        <button onClick={() => onAdd(item)} className="add">
                +
        </button>
            </div>

            <div className="col2 text-right">
              {item.qty} x ${item.price}
            </div>
          </div>
        ))
        
        }

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col2">Items Price</div>
              <div className="col1 text-right">${price.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col2">Delivery Charge Price</div>
              <div className="col1 text-right">${delivery.toFixed(2)}</div>
            </div>
           

            <div className="row">
              <div className="col2">
                <strong>Total Price</strong>
              </div>
              <div className="col1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
              <button onClick={()=> onClearCart()}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </aside>
    
        
  );
        }
}