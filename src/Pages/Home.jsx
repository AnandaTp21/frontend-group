import { useContext } from "react";
import { MainDataContext } from "../Context/Maindata";
function Home() {
    const [namaWeb] = useContext(MainDataContext)
    return ( 
        <h1>{namaWeb}</h1>
     );
}

export default Home;