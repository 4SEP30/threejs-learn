/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
