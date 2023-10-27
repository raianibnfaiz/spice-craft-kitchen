
import { Outlet } from 'react-router-dom'
import AppFooter from '../Shared/Footer/Footer';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/NavBar';

const Main = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
  };
  export default Main;

