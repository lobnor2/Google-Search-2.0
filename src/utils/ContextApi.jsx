import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = () => {
  const [imageSearch, setImageSearch] = useState(false);
  return (
    <Context.Provider value={{ imageSearch, setImageSearch }}>
      App Context
    </Context.Provider>
  );
};
