// UserContext.js
import { createContext, useState, useContext } from "react";
import { getUserDataByUsername } from "../services/userService.ts";
import propTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função para carregar dados do usuário com base no username
  const loadUserByUsername = async (username) => {
    const userData = await getUserDataByUsername(username);
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, loadUserByUsername }}>
      {children}
    </UserContext.Provider>
  );
};

  const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { useUser };

UserProvider.propTypes = {
    children: propTypes.node,
};
