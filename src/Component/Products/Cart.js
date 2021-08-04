import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import {useCart} from "react-use-cart"


const Cart = (userData) => {

        
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();


    if(isEmpty) return (<div className=" d-flex justify-content-center bg-danger fc-white">
        <h2>Cart is Empty</h2>
    </div>) 

    return(
        <div>
           <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
           <table className="table table-light table-hover m-0">
               <tbody>
               {items.map((item, index) =>{
                   return(
                   <tr key={index}>
                       <td>
                           <img src={item.thumb} style={{height: '6rem',width: '8rem'}}/>
                       </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>Quantity: ({item.quantity})</td>
                        <td>
                            <button className="btn btn-info m-2" onClick={() =>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                            <button className="btn btn-info m-2" onClick={() =>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                            <button className="btn btn-danger m-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                        </td>
                   </tr>
                   )
               })}
                </tbody>
           </table>
           <div className="d-flex mr-5 justify-content-end">
            <h2>Total Price: Rs.{cartTotal}</h2>
           </div>

           <div className="d-flex mr-5 justify-content-end">
               <button className="btn btn-danger" onClick={() => emptyCart()}>Clear Cart</button>
           </div>
        </div>
    );
};

export default Cart;