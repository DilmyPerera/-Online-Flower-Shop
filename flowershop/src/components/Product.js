import { useState } from 'react';
import '../assets/CSS/layout.css';
export default function Product(){
    
    const [quantity, setQuantity] = useState(0);

    const handleAddtoCart = () =>{
        if (quantity >0){
            addtoCart({...flowers, qty: quantity });
        }
    }
    return(
        <div className="grid-item">

            <div class="card">
                <img src={flowers.img} alt= {flower.name}/>
                <div class="card-body">

                    <h5 class="card-title">Price: ${flower.price}</h5>

                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=> setQuantity(Number(e.target.value))} />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}