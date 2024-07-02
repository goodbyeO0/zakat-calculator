import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";


function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const { dark, setDark } = useContext(UserContext);

    const toggleDarkMode = () => {
        setDark(!dark); // Toggle the dark mode state
    };

    const iconTransitionStyle = {
        transition: 'transform 0.3s ease-in-out',
        transform: dark ? 'rotate(180deg)' : 'rotate(0deg)',
    };


    // Inline style for cursor change
    const linkStyle = {
        cursor: 'pointer',
    };

    // Inline style for rotating the icon
    const iconStyle = showDropdown ? { transform: 'rotate(180deg)' } : {};

    return (
        <>
            <div className={`flex justify-center min-w-full ${dark ? 'bg-[#000000]' : 'bg-[#FAFAFC]'} container`}>
                <div className={`font-semibold w-3/4 min-h-16 ${dark ? 'text-[#FAFAFC]' : 'text-[#1F1F1F]'} flex justify-evenly items-center`}>
                    <FaHandsHelping size={30} />
                    <Link to={"/"} style={linkStyle}>Home</Link>
                    <Link to={"/about"} style={linkStyle}>Tentang Kami</Link>
                    <div onClick={() => setShowDropdown(!showDropdown)} className="relative" style={linkStyle}>
                        <div className='flex items-center gap-1'>
                            Calculators <MdKeyboardArrowDown className='mt-1' style={iconStyle} />
                        </div>
                        {showDropdown && (
                            <div className="absolute w-48 py-2 mt-2 bg-white border rounded-md shadow-xl top-full">
                                <Link to={"/perniagaan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={linkStyle}>Zakat Perniagaan</Link>
                                <Link to={"/pendapatan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={linkStyle}>Zakat Pendapatan</Link>
                                <Link to={"/emas"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={linkStyle}>Zakat Emas</Link>
                                <Link to={"/wangSimpanan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={linkStyle}>Zakat Wang Simpanan</Link>
                            </div>
                        )}
                    </div>

                    <button onClick={toggleDarkMode} className="flex items-center justify-center p-2 ${dark ? 'bg-[#1F1F1F]' : 'bg-[#FAFAFC]'}] ">
                        {dark ? <MdDarkMode size={30} style={iconTransitionStyle} /> : <CiLight size={30} style={iconTransitionStyle} />}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;