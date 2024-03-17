import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Badges.png';
import './navbar.css'
// BEM -> Block Element Modifier

const Menu = () => (
<>
          <p><a href="#home">Home</a></p>
          <p><a href="#brand">Docs</a></p>
          <p><a href="#dmac">DorkM3</a></p>
          <p><a href="https://www.exploit-db.com/google-hacking-database" target='_blank'>ExploitDB</a></p>
</>

)


const Navbar = () => {
 const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="app__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#brand">Docs</a></p>
          <p><a href="#dmac">DorkM3</a></p>
          <p><a href="#exploitdb">ExploitDB</a></p>
        </div>
      </div>
      <div className="app__navbar-sign">
       <a href="#dmac"> <button type="button">Get Started</button> </a> 
      </div>
      <div className='app__navbar-menu'>
        { toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && 
            <div className='app__navbar-menu_container scale-up-center'>
              <div className='app__navbar-menu_container-links'>
                  <Menu />
              </div>
            </div>
          
        }
      </div>
    </div>
  );
};

export default Navbar;