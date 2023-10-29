import { create } from "zustand";

const useDarkModeStore = create((set) => ({
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,

  setDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return { darkMode: newDarkMode };
    }),
}));

export default useDarkModeStore;
