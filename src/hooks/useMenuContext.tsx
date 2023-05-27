import { useContext } from "react";
import MenuContext from "@/src/context/menu";

const useMenuContext = () => {
  return useContext(MenuContext);
};

export default useMenuContext;
