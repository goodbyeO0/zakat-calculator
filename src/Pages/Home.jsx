import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <div className="bg-[#F5F5F7] h-screen w-full m-0 p-0">
                <Navbar />
                <Cards />
            </div>
        </>
    )
}

export default Home;