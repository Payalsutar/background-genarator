import {Fragment} from 'react'
// import { FaChessQueen } from "react-icons/fa";
import { Outlet} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
// import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
// import { UserContext } from '../../context/user.context';
// import { CartContext } from '../../context/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { signOutUser } from '../../utils/firebase/firebase.utils';
import { signOutStart } from '../../store/user/user.action';
import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles';
const Navigation=()=>{  

    const dispatch=useDispatch();
   const currentUser= useSelector(selectCurrentUser);
    // const {currentUser}=useContext(UserContext);
    // const {isCartOpen}=useContext(CartContext);
    const isCartOpen=useSelector(selectIsCartOpen); 

    const signOutUser=()=>dispatch(signOutStart());

    // const signOutHandler=async()=>{
    //  await signOutUser();
    //  setCurrentUser(null);
    
    // }
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
           
            <i className='fas fa-crown' style={{fontSize:'36px'}}></i>
            {/* <ReactLogo className='logo'/> */}
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ?(
                        <NavLink as='span' onClick={signOutUser}>
                             SIGN OUT 
                            </NavLink>
                    ):(
                        <NavLink to='/auth'>
                        SIGN IN
                    </NavLink> 
                    )
                }
                <CartIcon/>
            
                
                
            </NavLinks>
           {isCartOpen && <CartDropdown/>}
           </NavigationContainer>
        <Outlet/>
       
        </Fragment>
    );
  };
  export default Navigation;
