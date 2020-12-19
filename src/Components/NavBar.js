import { Close, Menu } from '@material-ui/icons';
import '../Sass/navbar.scss';

const NavBar = ({ children,onToggle,menuToggle }) => {

    return (
       <>
        <div className="menu-btn" onClick={onToggle}>
            {!menuToggle ? <Menu fontSize='large' /> : <Close fontSize='large' />}
        </div>
         <div className='navbar'>
           <div id="logo">Logo</div> 
           
           <nav>
               <ul className={`${menuToggle ? 'show' : null}`}>
                   {children}
                   
               </ul>
           </nav>
        </div>
       </>
    );
}

export default NavBar;
