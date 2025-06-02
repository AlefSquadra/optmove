import { ApplicationContext } from "@app/providers/ApplicationProvider/ApplicationContext";
import { useContext } from "react";

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
      throw new Error("useApplicationContext must be used within an ApplicationProvider");
    }
    return context;
  };
  