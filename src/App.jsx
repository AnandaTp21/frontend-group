import {
  useRoutes
} from "react-router-dom"
import Home from "./Pages/Home";
import Paito from "./Pages/Paito";
import Prediksi from "./Pages/Prediksi";
import Booster from "./Pages/Booster";
import RTP from "./Pages/Rtp";
import "./app.css"
function App() {
  let router = useRoutes(
    [
      {path : "/", element : <Home/>},
      {path : "/Paito", element : <Paito/>},
      {path : "/Prediksi", element : <Prediksi/>},
      {path : "/Booster", element : <Booster/>},
      {path : "/RTP", element : <RTP/>},
    ]
  )
  return router;
}

export default App;