
import { Outlet, useLocation } from 'react-router-dom'
import AppFooter from '../Shared/Footer/Footer';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/NavBar';
import Feature from '../pages/Feature/Feature';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    )
  };
  export default Main;

