import { useContext } from "react";
import HBOContext from "@/src/context/HBOProvider";

const useHBOContext = () => {
  return useContext(HBOContext);
};

export default useHBOContext;
