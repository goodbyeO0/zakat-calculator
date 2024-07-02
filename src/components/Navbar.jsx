
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className='flex justify-center min-w-full bg-[#FAFAFC] container'>
                <div className=' font-semibold w-3/4 min-h-12  text-[#4B4B4B] flex justify-evenly items-center'>
                    <img src={"./src/assets/zakatIcon.webp"} alt="Zakat Icon" className='w-10 h-10' />
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/calculator"}>Calculators</Link>
                </div>
            </div>
        </>

    )
}

export default Navbar