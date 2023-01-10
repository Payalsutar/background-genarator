// import { async } from '@firebase/util';
import React from 'react';
import { AuthError,AuthErrorCodes } from 'firebase/auth';
import {useState,FormEvent,ChangeEvent} from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signUpStart} from '../../store/user/user.action';
// import { UserContext } from '../../contexts/user.context';
import './sign-up-form.styles.tsx';
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () =>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    const dispatch = useDispatch();
    // const {setCurrentUser} = useContext(UserContext);
    // const val=useContext(UserContext);

    // console.log('hit');
    console.log(formFields);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(password !== confirmPassword){
        alert("passwords do not match");
        return;
    }
    try{
    dispatch(signUpStart(email,password,displayName));
    resetFormFields();


    }catch(error){
       if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
        alert('Cannot create user,email already in use');
       }else{
        console.log('user creation encountered an error',error);

       }
    }
    };

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = event.target;
    setFormFields({...formFields,[name]: value});
    };
    return(
        <SignUpContainer>
            <h2>Dont have an account ?</h2>
            {/* <span>Don't have an account?</span> */}
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                {/* <label>Display Name</label> */}
                    <FormInput 
                    label='Display Name' 
                    type ='text'
                    required
                        onChange = {handleChange} 
                        name= "displayName"
                        value = {displayName}
                     />

                {/* <label>Email</label> */}
                    <FormInput label ='Email' type='email' required onChange = {handleChange} name="email" value = {email}/>

                {/* <label>Password</label> */}
                    <FormInput label='Password' type='password' required onChange = {handleChange} name = "password" value = {password}/>

                {/* <label>Confirm Password</label> */}
                     <FormInput label= 'Confirm Password' type='password' required onChange = {handleChange} name = "confirmPassword" value = {confirmPassword}/>
                    <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;