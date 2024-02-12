import { createContext } from "react";
export const MainDataContext = createContext();

export default function MainDataContextFunc({ children }) {
  let listDataWeb = [{
    name : "Garuda Gaming",
    mainColor : "",
  }];
  let keys = [
    "676877",
    "26a3bd",
    "ec8ce1",
    "175600",
    "1e6bf3",
    "95a158",
    "9f9874",
  ];
  let DataWeb = listDataWeb[0]
  let key = keys[new Date(Date.now()).getUTCDay()]

  async function  getData(endpoint){
    let value = await fetch(`http://localhost:3000/${DataWeb.name}${endpoint}`,{
      headers : {
        key : key
      }
    })
    let valueJson = await value.json()
    return valueJson
  }

  
  return (
    <MainDataContext.Provider value={[DataWeb,getData]}>
     
      {children}
    </MainDataContext.Provider>
  );
}
