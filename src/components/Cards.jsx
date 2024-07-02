import { MdOutlineBusiness } from "react-icons/md";

function Cards() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">

                <div className="flex justify-between w-7/12 m-5 gap-28">
                    <div className="flex flex-col w-3/6 bg-[#FFFFFF] h-[280px] p-5 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <MdOutlineBusiness size={"30px"} className="m-3 opacity-70" />
                        <p className="m-3 text-2xl font-bold">Zakat Perniagaan</p>
                        <p className="m-3 ">Zakat Perniagaan adalah kewajipan 2.5% terhadap aset bersih perniagaan, termasuk inventori dan keuntungan. Klik untuk mengira Zakat Perniagaan anda.</p>
                    </div>
                    <div className="flex flex-col w-3/6 bg-[#FFFFFF] h-[280px] p-5 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <MdOutlineBusiness size={"30px"} className="m-3 opacity-70" />
                        <p className="m-3 text-2xl font-bold">Zakat Pendapatan</p>
                        <p className="m-3 ">Zakat Pendapatan, atau Zakat Pendapatan, adalah kewajipan 2.5% ke atas pendapatan tahunan selepas kos. Klik untuk mengira Zakat Pendapatan anda.</p>
                    </div>
                </div>

                <div className="flex justify-between w-7/12 m-8 gap-28">
                    <div className="flex flex-col w-3/6 bg-[#FFFFFF] h-[280px] p-5 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <MdOutlineBusiness size={"30px"} className="m-3 opacity-70" />
                        <p className="m-3 text-2xl font-bold">Zakat Emas</p>
                        <p className="m-3 ">Zakat Emas, atau Zakat Emas, adalah cukai 2.5% ke atas aset emas yang dimiliki selama setahun. Klik untuk mengira Zakat Emas anda.</p>
                    </div>
                    <div className="flex flex-col w-3/6 bg-[#FFFFFF] h-[280px] p-5 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <MdOutlineBusiness size={"30px"} className="m-3 opacity-70" />
                        <p className="m-3 text-2xl font-bold">Zakat Wang Simpanan</p>
                        <p className="m-3 ">Zakat Wang Simpanan, atau Zakat Simpanan, adalah kewajipan 2.5% ke atas simpanan yang disimpan selama setahun. Klik untuk mengira Zakat Wang Simpanan anda.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards;