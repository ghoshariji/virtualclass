import { createContext, useState } from "react";
export const IdContext = createContext(null);
export const IdProvider = (props) => {
  const [id, setId] = useState(null);
  const updateId = (newId) => {
    setId(newId);
  };
  return <IdContext.Provider value={{id,updateId}}>{props.children}</IdContext.Provider>;
};
