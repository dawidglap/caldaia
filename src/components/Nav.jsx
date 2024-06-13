import React, { useState } from 'react'; // Import React and useState hook
import { hamburger, close } from "../assets/icons"; // Import hamburger and close icons from assets
import { headerLogo } from "../assets/images"; // Import header logo from assets
import { navLinks } from "../constants"; // Import navigation links from constants

// Define the Nav functional component
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // Define the header with specific padding, position, and width styles
        <header className='padding-x py-8 absolute z-10 w-full'>
            {/* Navigation bar with flex layout for spacing and alignment */}
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    {/* Logo image with customized size */}
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={25}
                        height={25}
                        className='m-0 w-[25px] h-[25px]'
                    />
                </a>
                {/* Navigation links list, hidden on smaller screens */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        // Render each navigation link
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Sign-in and explore links, hidden on smaller screens */}
                <div className='flex gap-2 text-lg leading-normal font-medium max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>
                {/* Hamburger icon for mobile menu, shown only on smaller screens */}
                <div className='hidden max-lg:block'>
                    <img
                        src={isMenuOpen ? close : hamburger} // Conditionally show the close or hamburger icon
                        alt={isMenuOpen ? 'close icon' : 'hamburger icon'}
                        width={25}
                        height={25}
                        onClick={toggleMenu} // Add onClick handler
                        className='cursor-pointer z-30 relative' // Ensure high z-index and relative positioning
                    />
                </div>
            </nav>
            {/* Mobile menu, shown only when isMenuOpen is true */}
            <div
                className={`fixed top-0 right-0 h-screen bg-white z-20 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                    } w-4/5 max-w-[80vw] max-lg:text-xl max-lg:flex max-lg:flex-col max-lg:items-start max-lg:pt-10 max-lg:px-6 shadow-lg`}
            >
                <ul className='w-full mt-10'>
                    {navLinks.map((item) => (
                        <li key={item.label} className='w-full mb-4'>
                            <a
                                href={item.href}
                                className='leading-normal text-lg text-slate-gray block'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className='w-full flex gap-2 text-lg leading-normal font-medium mb-4'>
                        <a href='/'>Sign in</a>
                        <span>/</span>
                        <a href='/'>Explore now</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Nav; // Export the Nav component as default
