import { useDispatch,useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import './product-card.styles.css';

const ProductCard = ({product}) =>{
    const {name,price,imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () =>dispatch(addItemToCart(cartItems,product));

    return(
    <div className='product-card-container'>
        <img src = {imageUrl} alt = {`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
         <Button className ="button1" buttonType ={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
            Add to Card</Button>
    </div>
    );
};

export default ProductCard;