
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserState({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}