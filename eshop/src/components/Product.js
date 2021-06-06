import React from 'react';

export default function Product(props) {
  const { product, onAdd,onRemove } = props;
  return (
    
  
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div className="rowbutton">
        <button onClick={()=> onAdd(product)}>Add To Cart</button>
        <button onClick={() => onRemove(product)} className="remove">
                -
        </button>
        <button onClick={() => onAdd(product)} className="add">
                +
        </button>
      </div>
    </div>
   
 
  );
}
