import styled,{css} from "styled-components";

 const subColor ='grey';
 const mainColor='black';

 const shrinkLabelStyles = css`
      top:-14px;
      font-size:12px;
      color:${mainColor};
 `;

 type FormInputLabelProps = {
  shrink?:boolean;
 }

 export const FormInputLabel = styled.label<FormInputLabelProps>`
    color:${subColor};
    font-size:16px;
    font-weight:normal;
    position:absolute;
    pointer-events: none;
    left:5px;
    top:10px;
    transition: 300ms ease all;

    ${({shrink}) =>shrink && shrinkLabelStyles};
    
    `;

    export const Input=styled.input`
    background: none;
    background-color: white;
    color:${subColor};
    font-size : 18px;
    padding : 10px 10px 10px 5px;
    display:block;
    width:100%;
    border:none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin :25px 0;

    &:focus{
      outline:none;
    }

    &:focus ~ ${FormInputLabel}{
      ${shrinkLabelStyles};
    }
    `;

    export const Group = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password']{
      letter-spacing :0.3em;
      outline:none;
  }
    `;

    

// .group{
    
//     color:gray;
// }



// .form-input{
//     background: none;
//     background-color: white;
//     color:gray;
//     font-size : 18px;
//     padding : 10px 10px 10px 5px;
//     display:block;
//     width:100%;
//     border:none;
//     border-radius: 0;
//     border-bottom: 1px solid gray;
//     margin :25px 0;
//     outline: 0;

//     transition: border-color 0.2s ease;
// }

//  form-input::label{
//     color:transparent;
// } 
// .form-input:label-shown ~ .form__label {
//     font-size: 1.3rem;
//     cursor: text;
//     top: 20px;
//   }
  



// input[type='password']{
//     letter-spacing :0.3em;
//     outline:none;
// }

// /* form-input:focus + form-input-label {
//     color: #111;
//     transform: translate(0, -2.75rem);
//   } */

//   .form-input-label{
//     color:gray;
//     font-size:16px;
//     font-weight:normal;
//     position:absolute;
//     pointer-events: none;
//     left:5px;
//     top:55px;
//     transition: 300ms ease all;
//     bottom:50%;
//     display: block;
//     transform: translate(0, -2.75rem);

// }

// .form-input:focus {
//     padding-bottom: 6px;
//     font-weight: 700;
//     border-width: 3px;
//     border-image: linear-gradient(to right, #11998e, #38ef7d);
//     border-image-slice: 1;
//   }

  // .form-input:focus ~ .form-input-label {
  //   position: absolute;
  //   top: 0;
  //   /* padding-bottom: 8px; */
  //   display: block;
  //   transition: 0.2s;
  //   font-size: 1rem;
  //   color: #11998e;
  //   font-weight: 700;
  // }

  /* .form-input:required, .form-input:invalid {
    box-shadow: none;
  } */



