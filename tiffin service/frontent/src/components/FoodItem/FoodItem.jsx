// import React, { useContext } from 'react';  // Add useState import
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';

// const FoodItem = ({id,name,price,description,image}) => {

//     const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt={name} />
//             {!cartItems[id] 
//                 ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className='food-item-counter'>
//                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                     <p>{cartItems[id]}</p>
//                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    

//                 </div>

//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className="food-item-price">${price}</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItem
import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItem[id] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add to cart"
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt="Remove from cart"
                        />
                        <p>{cartItem[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt="Increase quantity"
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
