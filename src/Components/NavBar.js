import '../Sass/navbar.scss';

const NavBar = ({ children }) => {
    return (
        <div className='navbar'>
           <div id="logo">Logo</div> 
           <nav>
               <ul>
                   {children}
               </ul>
           </nav>
        </div>
    );
}

export default NavBar;
