
import { Outlet } from 'react-router-dom'
import AppFooter from '../Shared/Footer/Footer';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/NavBar';
import Feature from '../pages/Feature/Feature';

const Main = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Feature></Feature>
            <Footer></Footer>
        </div>
    )
  };
  export default Main;

