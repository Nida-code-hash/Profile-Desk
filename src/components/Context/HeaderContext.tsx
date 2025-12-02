import { createContext, useContext, useState, useEffect } from "react";

interface HeaderContextType {
  name: string;
  setName: (name: string) => void;
}

const HeaderContext = createContext<HeaderContextType | null>(null);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");

  // Load name from localStorage on refresh
  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      const user = JSON.parse(stored);
      setName(user.fullName || ""); // API returns fullName
    }
  }, []);

  return (
    <HeaderContext.Provider value={{ name, setName }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) throw new Error("useHeader must be used inside HeaderProvider");
  return context;
};

