import React from 'react';
import logo from '../assets/dlogo.png'

function Navbar() {
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Roles', link: '/role' },
    { title: 'Leaderboard', link: '/leaderboard' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent mt-3">
      <div className="text-white flex flex-row justify-center items-center ml-4">
        <img src={logo} className='h-10 w-10'/>
        <div >
          <h3 className='font-semibold'>Dishna ' 23</h3>
          {/* <p className='text-xs'>School of engineering , CUSAT</p> */}
        </div>
      </div>
      <div className="flex  text-sm mr-3 justify-center items-center">
        {navItems.map(item => (
         <a
         key={item.title}
         href={item.link}
         className="relative text-gray-100 mr-[4rem] transition duration-300 ease-in-out hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-clip-text hover:before:text-transparent"
       >
         {item.title}
       </a>
        ))}
        <button className="  text-white px-4 text-xs py-2 rounded-full"  style={{
        background: 'linear-gradient(45deg, #E96390, #A34197)',
      }}>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
