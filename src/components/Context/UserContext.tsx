import React, { createContext, useContext, useState } from "react";

interface UserData {
  id: string;
  fullName: string;
  email: string;
  role: string;
  avatar?: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(
    JSON.parse(localStorage.getItem("userData") || "null")
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
