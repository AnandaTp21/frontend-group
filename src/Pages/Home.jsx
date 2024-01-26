import { useContext,useEffect } from "react";
import { MainDataContext } from "../Context/Maindata";
function Home() {
  const [DataWeb,linkData] = useContext(MainDataContext)
  useEffect(()=>{
    },[])
    return ( 
       <a href="/RTP">asdaiosdj</a>
     );
}

export default Home;