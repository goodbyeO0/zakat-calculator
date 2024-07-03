import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function WangSimpanan() {
    const [simpanan, setSimpanan] = useState('');
    const [zakat, setZakat] = useState(null);
    const { dark } = useContext(UserContext);

    const nisab = 24198; // Nisab for 2024
    const zakatRate = 0.025;

    const calculateZakat = (e) => {
        e.preventDefault();
        if (simpanan >= nisab) {
            setZakat(simpanan * zakatRate);
        } else {
            setZakat(0);
        }
    };

    return (
        <div className={`flex items-center justify-center w-full h-screen ${dark ? ' bg-[#121212]' : ' bg-[#F5F5F7]'} p-8 mx-auto `}>
            <div className={`w-2/6 p-8 ${dark ? ' bg-[#1E1E1E] text-white' : ' bg-white'} rounded shadow-xl h-4/6`}>

                <h1 className="mb-16 text-2xl font-bold text-center ">Kalkulator Zakat Wang Simpanan</h1>
                <form onSubmit={calculateZakat}>
                    <div className="mb-4">
                        <label htmlFor="simpanan" className="block mb-2 font-bold ${dark ? ' text-[#121212]' : ' text-[#F5F5F7]'}">Jumlah Simpanan (RM):</label>
                        <input
                            type="number"
                            id="simpanan"
                            value={simpanan}
                            onChange={(e) => setSimpanan(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`p-[10px] font-bold ${dark ? ' text-[#121212] bg-white hover:bg-[#c7c7c7]' : ' text-[#F5F5F7] bg-black hover:bg-[#343434]'} rounded  focus:outline-none focus:shadow-outline`}
                    >
                        Kira Zakat
                    </button>
                </form>
                {zakat !== null && (
                    <div className={`p-4 mt-4  rounded ${!dark ? ' bg-[#121212] text-white' : ' bg-[#F5F5F7]'} text-black`}>
                        <h2 className="text-xl font-bold">Jumlah Zakat yang Perlu Dibayar:</h2>
                        <p className="text-lg">RM {zakat.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WangSimpanan