// import SHOP_DATA from '../../shop-data.json';
import { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.componet';
import Category from '../category/category.componet';
import { fetchCategoriesStart } from '../../store/categories/category.action';

// import './shop.styles.css';

const Shop = () =>{ 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCategoriesStart());
  },[]);
    // console.log(categoriesArray);
    
    // setCategoriesMap(categoryMap);


  return(
      
    <Routes>
      <Route index element ={<CategoriesPreview/>}/>
      <Route path=":category" element ={<Category/>}/>
    </Routes>
     
  );
};

export default Shop;