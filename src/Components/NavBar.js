import '../Sass/navbar.scss';

const NavBar = ({ children,onToggle,menuToggle }) => {

    return (
       <>
        <div className={`menu-btn ${menuToggle ? 'close' : null}`} onClick={onToggle}>
            <div className="menu-btn-line"></div>
            <div className="menu-btn-line"></div>
            <div className="menu-btn-line"></div>
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
