import UserContext from '../context/UserContext';
import { useContext } from 'react';

function Emas() {
    const { dark } = useContext(UserContext);
    console.log(dark)
    return (
        <div>Emas</div>
    )
}

export default Emas