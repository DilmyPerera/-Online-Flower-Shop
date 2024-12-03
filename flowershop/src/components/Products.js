import '../assets/CSS/layout.css';
import {flowers} from './FlowerDB';
import { useState } from 'react';

export default function Products(){
   
    const [cart ,setCart] = useState([]);

    const addToCart = (flower) =>{
        setCart((prevCart)=>{
            const existing = prevCart.find((item)=>item.id === flower.id);
            if(existing) {
                return prevCart.map((item)=>
                    item.id === flower.id
                    ?{...item, qty: item.qty + flower.qty }
                    : item
                )
            }
            return [...prevCart,flower];
        });
    };
    
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}