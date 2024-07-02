import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);


    // Inline style for cursor change
    const linkStyle = {
        cursor: 'pointer',
    };

    // Inline style for rotating the icon
    const iconStyle = showDropdown ? { transform: 'rotate(180deg)' } : {};

    return (
        <>
            <div className='flex justify-center min-w-full bg-[#FAFAFC] container'>
                <div className='font-semibold w-3/4 min-h-16 text-[#4B4B4B] flex justify-evenly items-center'>
                    <img src={"./src/assets/zakatIcon.webp"} alt="Zakat Icon" className='w-10 h-10' />
                    <Link to={"/"} style={linkStyle}>Home</Link>
                    <Link to={"/about"} style={linkStyle}>About Us</Link>
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
                </div>
            </div>
        </>
    );
}

export default Navbar;