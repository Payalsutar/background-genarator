import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,
  signInWithPopup,GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signOut,
   onAuthStateChanged,User,NextOrObserver} 
from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs,QueryDocumentSnapshot} from 'firebase/firestore'
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
    apiKey: "AIzaSyCc3h5xpnJ3qg2St1KJaOzbBwIeuUFd7-I",
    authDomain: "crwn-clothing-db-36573.firebaseapp.com",
    projectId: "crwn-clothing-db-36573",
    storageBucket: "crwn-clothing-db-36573.appspot.com",
    messagingSenderId: "460648805516",
    appId: "1:460648805516:web:0e9b4a46f02df83dce77a9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
   prompt:"select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,googleProvider);

  export const db = getFirestore();

  export type objectToAdd ={
    title:string;
  }

  export const addCollectionAndDocuments = async <T extends objectToAdd>(
    collectionKey:string,
    objectsToAdd:T[]
  ):Promise<void> =>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) =>{
  const docRef = doc(collectionRef,object.title.toLowerCase());
  batch.set(docRef,object);
  });

  await batch.commit();
  console.log('done');
  };
  
  export const getCategoriesAndDocuments = async ():Promise<Category[]> =>{
    const collectionRef =collection(db,'categories');
    const q = query(collectionRef);


    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) =>docSnapshot.data() as Category);

  // return categoryMap;
  };

  export type AdditionalInformation = {
    displayName? :string;
  }

  export type UserData = {
    createdAt:Date;
    displayName:string;
    email:string;
  }

  export const createUserDocumentFromAuth = async(
    userAuth:User,
    additionalInformation = {} as AdditionalInformation
    ):Promise<void | QueryDocumentSnapshot<UserData> > =>{
    if(!userAuth) return;
   const userDocRef = doc(db,'users',userAuth.uid);
//    console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef);
//    console.log(userSnapshot);
//    console.log(userSnapshot.exists());

   if(!userSnapshot.exists()){
    const{displayName,email} = userAuth;
    const createAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createAt,
            ...additionalInformation,
        });
    }catch(error){
      console.log('error creating the user',error);
    }
   };
   return userSnapshot as QueryDocumentSnapshot<UserData>;
  };

  export const createAuthUserWithEmailAndPassword = async (email:string,password:string) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password) ;
  };
  export const signInAuthUserWithEmailAndPassword = async (email:string,password:string) =>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password) ;
  };

  export const signOutUser = async() =>await signOut(auth);

  export const onAuthStateChangedListener = (callback:NextOrObserver<User>) => 
  onAuthStateChanged(auth,callback);
  
  export const getCurrentUser = ():Promise<User | null> =>{
    return new Promise((resolve,reject) =>{
      const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) =>{
          unsubscribe();
          resolve(userAuth);
        },
        reject
      );
    });
  };
