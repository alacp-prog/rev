import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function RootLayout() {

  const [users, setUsers] = useState([]);

  // ✔️ Ajouter utilisateur
  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  // ✔️ Supprimer utilisateur (bonus)
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <AppContext.Provider 
      value={{ 
        users, 
        addUser, 
        deleteUser,
        clearUsers
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </AppContext.Provider>
  );
}