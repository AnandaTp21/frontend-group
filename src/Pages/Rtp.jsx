import { useEffect, useContext, useState } from "react";
import { MainDataContext } from "./../Context/Maindata";
import NavigationRTP from "../Components/RTP/NavigationRTP";
function RTP() {
  const [data, setData] = useState([]);
  const [DataWeb, getData] = useContext(MainDataContext);
  const [provider, setProvider] = useState("Pragmatic Play");
  async function replaceData() {
    let dataGet = await getData(`/rtp/${provider}`);
    dataGet.sort((a, b) =>
      a.namaGame.toString().localeCompare(b.namaGame.toString())
    );
    setData(dataGet);
  }


  useEffect(() => {
      replaceData();
      setInterval(() => {
        replaceData();
      }, 300000);
  }, [provider]);

  return (
    <>
  
    <NavigationRTP setProvider={setProvider} provider={provider} setData={setData}/>
      {data.map((val) => (
        <div>{val.namaGame}</div>
      ))}
    </>
  );
}

export default RTP;
