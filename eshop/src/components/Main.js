import React from 'react';
import Product from './Product';
export default function Main(props)
{
    const { products, onAdd, onRemove }=props;
    return(
        <main className="block col2">
          
            <div className="products">
                {products.map((product)=>(

                       <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}></Product>

                    ))
                }
            
                
            </div>
        </main>
    
    
    );
}