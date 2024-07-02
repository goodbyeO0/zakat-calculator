import { useContext } from "react";
import Cards from "../components/Cards";
import UserContext from "../context/UserContext";



function Home() {
    const { dark } = useContext(UserContext);
    return (
        <>
            <div className={`h-screen w-full m-0 p-0 ${dark ? 'bg-[#121212]' : 'bg-[#F5F5F7]'}`}>
                <Cards />
            </div>
        </>
    )
}

export default Home;