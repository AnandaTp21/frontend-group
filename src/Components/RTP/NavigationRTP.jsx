import { useState } from "react";
function NavigationRTP({ provider, setProvider, setData }) {
  const [dataNav, setDataNav] = useState([
    "Pragmatic Play",
    "Joker",
    "Habanero",
    "Microgaming",
    "Relax",
    "Play N Go",
    "PlayTech",
    "SpadeGaming",
    "PGSoft",
    "Top Trend Gaming",
    "Genesis",
    "BNG",
    "Playstar",
    "YGGdrasil",
    "Ion Slot",
    "Next Spin",
    "No Limit City",
    "Red Tiger",
    "Net Ent",
    "Big Time Gaming",

  ]);
  return (
  <div>
    {dataNav.map((val,index)=>{
        return(<div onClick={()=>{
            setData([])
            setProvider(val)
        }}>
            {val}
        </div>)
    })}
  </div>);
}

export default NavigationRTP;
