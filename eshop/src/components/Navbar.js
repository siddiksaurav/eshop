import React from 'react';
import { useState } from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Navbar(props)
{
 
    const showingCart=(sh)=>{
      props.setShow(sh);
      console.log()
    };
    return(
        <navbar className="row nav center">
            <div>
                <a href="#/">
                    <h1>E-shop</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                
          {props.countCartItems ? (
            <button onClick={ ()=>showingCart(!props.show) }className="badge">  {props.countCartItems}<ShoppingCartIcon/></button>
          ) : (
            <button onClick={ ()=>showingCart(!props.show) }className="badge"><ShoppingCartIcon/> </button>
          )}
        </a>{' '}
        
      </div>
    </navbar>
  );
 
}
