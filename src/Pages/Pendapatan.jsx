
import { useState, useEffect } from 'react';

const Pendapatan = () => {
    const [income, setIncome] = useState(0);
    const [extraIncome, setExtraIncome] = useState(0);
    const [netIncome, setNetIncome] = useState(0);
    const [zakatAmount, setZakatAmount] = useState(0);

    useEffect(() => {
        const net = income + extraIncome;
        setNetIncome(net);
    }, [income, extraIncome]);

    useEffect(() => {
        const nisab = 24198.0;
        let zakat = netIncome * 0.025;
        if (netIncome < nisab) {
            zakat = 0;
        }
        setZakatAmount(zakat);
    }, [netIncome]);

    return (
        <>
            <style>
                {`
          .centered-box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            background-color: #fff;
            max-width: 600px; /* Adjust the width of the border */
            height: 400px; /* Adjust the height of the border */
            margin: auto;
            padding: 20px; /* Added padding inside the border */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for the floating effect */
            border-radius: 8px; /* Rounded corners */
            border: 1px solid #ddd; /* Border around the entire content */
          }

          table {
            border-collapse: collapse;
            width: 100%;
          }

          td {
            border: 1px solid #ddd;
            padding: 8px;
          }

          h2 {
            margin: 0 0 20px 0;
          }
        `}
            </style>
            <div className="centered-box">
                <h2>Zakat Pendapatan 2024</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Pendapatan Bulanan (Monthly Income):</td>
                            <td>
                                <input
                                    type="number"
                                    value={income}
                                    onChange={(e) => setIncome(parseFloat(e.target.value))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Pendapatan Tambahan (Bonus atau sewaan):</td>
                            <td>
                                <input
                                    type="number"
                                    value={extraIncome}
                                    onChange={(e) => setExtraIncome(parseFloat(e.target.value))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Pendapatan Bersih (Net Income):</td>
                            <td>{netIncome}</td>
                        </tr>
                        <tr>
                            <td>Jumlah Zakat:</td>
                            <td>{zakatAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Pendapatan;

