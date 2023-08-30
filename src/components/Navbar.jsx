import React from 'react';
import logo from '../assets/dlogo.png'

function Navbar() {
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Leaderboard', link: '/leaderboard' },
    { title: 'Contact', link: '/contact' }
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent mt-3">
      <div className="text-white font-bold flex flex-row justify-center items-center">
        <img src={logo} className='h-10 w-10'/>
        <h3>Dishna ' 23</h3>
      </div>
      <div className="flex  text-sm mr-5 justify-center items-center">
        {navItems.map(item => (
          <a key={item.title} href={item.link} className="text-gray-100 mr-[4rem]">
            {item.title}
          </a>
        ))}
        <button className="bg-white  text-black px-4 text-xs py-2 rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
