import {
  useRoutes
} from "react-router-dom"
import Home from "./Pages/Home";
import Prediksi from "./Pages/Prediksi";
import Booster from "./Pages/Booster";
import RTP from "./Pages/Rtp";
import "./Style/app.css"
import { useContext } from "react";
import { MainDataContext } from "./Context/Maindata";
function App() {
  const [DataWeb] =useContext(MainDataContext)
  let router = useRoutes(
    [
      {path : "/", element : <Home/>},
      {path : "/Prediksi-Togel", element : <Prediksi/>},
      {path : "/Booster-Slot", element : <Booster/>},
      {path : "/RTP", element : <RTP/>},
    ]
  )
  return (
    <div className="main-wrapper">
    <div className="wrapper-app">
    {router}
    </div>
    </div>
  );
}

export default App;