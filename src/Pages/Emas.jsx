import { useState } from "react";

const Emas = () => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen">
      <div className="w-64 border-2 border-black shadow-2xl p-5">
        <div className="flex justify-center items-center font-bold">
          <h1>Zakat Emas 2024</h1>
        </div>

        <div className="flex flex-row items-center font-extralight ">
          <p className="flex-1">Nilai Uruf</p>
          <p className="flex-none ml-4">800 gram</p>
        </div>
        <div className="flex flex-row items-center font-extralight ">
          <p className="flex-1">Harga Emas</p>
          <p className="flex-none ml-4">284.69</p>
        </div>

        <div className="form">
          <form>
            <div className="mt-2">
              <label>Jenis: </label> <br />
              <div className="w-full max-w-xs mx-auto">
                <select
                  id="jenis"
                  name="jenis"
                  className="block w-full mt-1 border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="volvo">Pakai</option>
                  <option value="saab">Simpan</option>
                </select>
              </div>
            </div>
            <div className="hasil mt-2">
              <label htmlFor="hasil">Jumlah Emas: </label>
              <div className="border-2">
                <input type="number" id="hasil" />
                <br />
              </div>
            </div>
            <div className="kos mt-2">
              <label htmlFor="kos">Harga Emas: </label>
              <div className="border-2">
                <input type="number" id="kos" />
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Emas;
