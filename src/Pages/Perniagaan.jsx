import "../components/perniagaan.css";
import { useState, useEffect } from "react";

const Perniagaan = () => {
    const [hasil, setHasil] = useState(0);
    const [kos, setKos] = useState(0);
    const [untungBersih, setUntungBersih] = useState(0);
    const [jumlahZakat, setJumlahZakat] = useState(0);

    useEffect(() => {
        const untungBersih = hasil - kos;
        setUntungBersih(untungBersih);
    }, [hasil, kos]);

    useEffect(() => {
        var zakat = untungBersih * 0.025;
        if (untungBersih < 24198.0) {
            zakat = 0;
        }
        setJumlahZakat(zakat);
    }, [untungBersih]);

    return (
        <div className="perniagaan">
            <h2>Zakat Perniagaan 2024</h2>
            <div className="form">
                <form>
                    <label htmlFor="hasil">Hasil: </label>
                    <input
                        type="number"
                        id="hasil"
                        value={hasil}
                        onChange={(e) => setHasil(e.target.value)}
                    />
                    <br />
                    <label htmlFor="kos">Kos: </label>
                    <input
                        type="number"
                        id="kos"
                        value={kos}
                        onChange={(e) => setKos(e.target.value)}
                    />
                    <br />
                    <label>Untung Bersih: </label>
                    {untungBersih}
                    <br />
                    <label>Jumlah Zakat: </label>
                    {jumlahZakat}
                </form>
            </div>
        </div>
    );
};

export default Perniagaan;
