// import { async } from '@firebase/util';
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';
import { 
    // auth,
    createUserDocumentFromAuth, 
    // signInWithGoogleRedirect,
    signInWithGooglePopup ,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.css';


// import { async } from '@firebase/util';

const Authentication = () =>{
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);

    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);

    //     }
    //     // console.log(response);
    // },[]);

    // const logGoogleUser = async () =>{
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = createUserDocumentFromAuth(user);
    // };

    // const logGoogleRedirectUser = async () =>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // };
    return(
        <div className='authentication-container'>
            {/* <h1>Sign In page</h1> */}
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        </div>
    )
}
export default Authentication;