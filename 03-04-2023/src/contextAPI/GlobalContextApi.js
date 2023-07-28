import React, { createContext, useEffect, useState } from "react";
export const GlobalProvider = createContext();
const GlobalContextApi = ({ children }) => {
  const [planet, setplanet] = useState();
  useEffect(() => {
    window
      .fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
      )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setplanet(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(planet);
  return (
    <GlobalProvider.Provider value={planet}>{children}</GlobalProvider.Provider>
  );
};

export default GlobalContextApi;
