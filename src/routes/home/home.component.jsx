// import CategoryItem from '../category-item/category-item.component';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

// import './categories.styles.css';
const Home = () => {

 
  return (
    <div>
      
  <Directory />;
  <Outlet/>
  </div>
  );
};
  
export default Home;
