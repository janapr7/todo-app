import { create } from "zustand";

const useActiveMenuStore = create((set) => ({
  activeMenu: JSON.parse(localStorage.getItem("activeMenu")) || "All",

  setActiveMenu: (status) =>
    set((state) => {
      const newActiveMenu = status;
      localStorage.setItem("activeMenu", JSON.stringify(newActiveMenu));
      return { activeMenu: newActiveMenu };
    }),
}));

export default useActiveMenuStore;
