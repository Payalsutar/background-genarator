import './cart-item.styles.css';

const CartItem = ({cartItem}) =>{
    const {name,imageUrl,price,quantity} = cartItem;
  return(
    <div className='card-item-container'>
      <div className='img-style'>
        <img src ={imageUrl} alt={`${name}`}/>
      </div>  
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
            {quantity} × ${price}
            </span>
        </div>
    </div>
  );
};

export default CartItem;