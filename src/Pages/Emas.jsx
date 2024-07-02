import { useEffect, useState } from "react";

const Emas = () => {
  const hargaEmas = 284.69;
  const [jenis, setJenis] = useState("pakai");
  const [jumlahZakat, setJumlahZakat] = useState(0.0);
  const [nilaiUruf, setNilaiUruf] = useState(800);
  const [beratEmas, setBeratEmas] = useState(0.0);
  const [perluZakat, setPerluZakat] = useState("");
  const [zakat, setZakat] = useState(0.0);
  const [nilai, setNilai] = useState(0.0);

  useEffect(() => {
    if (jenis === "pakai") {
      setNilaiUruf(800);
    } else {
      setNilaiUruf(85);
    }
  }, [jenis]);

  useEffect(() => {
    const zakatCounter = (beratEmas / 1000) * hargaEmas * 0.025;
    setZakat(zakatCounter);
    if (beratEmas < nilaiUruf) {
      setPerluZakat("Tidak perlu membayar zakat");
      setZakat(0);
    } else {
      setPerluZakat("");
    }
  }, [beratEmas, nilaiUruf]);

  useEffect(() => {
    setNilai((beratEmas / 1000) * hargaEmas);
  }, [beratEmas]);
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen">
      <div className="w-64 border-2 border-black shadow-2xl p-5">
        <div className="flex justify-center items-center font-bold">
          <h1>Zakat Emas 2024</h1>
        </div>

        <div className="flex flex-row items-center font-extralight ">
          <p className="flex-1">Nilai Uruf</p>
          <p className="flex-none ml-4">{nilaiUruf} gram</p>
        </div>
        <div className="flex flex-row items-center font-extralight ">
          <p className="flex-1">Harga Emas (per/kg)</p>
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
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                  className="block w-full mt-1 border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="pakai">Pakai</option>
                  <option value="simpan">Simpan</option>
                </select>
              </div>
            </div>
            <div className="hasil mt-2">
              <label htmlFor="hasil">Berat Emas (gram): </label>
              <div className="border-2 ">
                <input
                  type="number"
                  id="hasil"
                  value={beratEmas}
                  onChange={(e) => setBeratEmas(e.target.value)}
                />
                <br />
              </div>
            </div>
            <div className="mt-2">
              <label>
                Nilai Emas :
                <div className="font-bold">
                  RM{nilai.toFixed(2)} <br />{" "}
                </div>
              </label>
            </div>
            <div className="mt-2">
              <label>
                Jumlah Zakat:
                <div className="font-bold">
                  RM{zakat.toFixed(2)} <br />{" "}
                </div>
              </label>
              <div className="font-extralight">{perluZakat}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Emas;
