'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dbLoading, setDbLoading] = useState(false);
  const [dbError, setDbError] = useState(null);

  return (
    <AppContext.Provider value={{ dbLoading, setDbLoading, dbError, setDbError }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook para usar el contexto fácilmente
export function useAppStatus() {
  return useContext(AppContext);
}