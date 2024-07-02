import "../components/perniagaan.css";
import { useState, useEffect } from "react";

const Perniagaan = () => {
  const [hasil, setHasil] = useState(0.0);
  const [kos, setKos] = useState(0.0);
  const [untungBersih, setUntungBersih] = useState(0.0);
  const [jumlahZakat, setJumlahZakat] = useState(0.0);
  const [zakatNeed, setZakatNeed] = useState("");

  useEffect(() => {
    const untungBersih = hasil - kos;
    setUntungBersih(untungBersih);
  }, [hasil, kos]);

  useEffect(() => {
    var zakat = untungBersih * 0.025;
    if (untungBersih < 24198.0) {
      zakat = 0;
      setZakatNeed("Tidak perlu membayar zakat");
    } else {
      setZakatNeed("");
    }
    setJumlahZakat(zakat);
  }, [untungBersih]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="perniagaan w-64  border-2 border-black shadow-2xl p-5">
        <div className="flex justify-center items-center font-bold">
          <h1>Zakat Perniagaan 2024</h1>
        </div>

        <div className="flex flex-row items-center font-extralight ">
          <p className="flex-1">Amaun Nisab</p>
          <p className="flex-none ml-4">RM 24,198.00</p>
        </div>

        <div className="form">
          <form>
            <div className="hasil mt-2">
              <label htmlFor="hasil">Hasil: </label>
              <div className="border-2 ">
                <input
                  type="number"
                  id="hasil"
                  value={hasil}
                  onChange={(e) => setHasil(e.target.value)}
                />
                <br />
              </div>
            </div>
            <div className="kos mt-2">
              <label htmlFor="kos">Kos: </label>
              <div className="border-2 ">
                <input
                  type="number"
                  id="kos"
                  value={kos}
                  onChange={(e) => setKos(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-2">
              <label>
                Untung Bersih:{" "}
                <div className="font-bold">{untungBersih.toFixed(2)}</div>
              </label>
            </div>
            <div className="mt-2">
              <label>
                Jumlah Zakat:
                <div className="font-bold">
                  {jumlahZakat.toFixed(2)} <br />{" "}
                </div>
              </label>
              <div className="font-extralight">{zakatNeed}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perniagaan;
