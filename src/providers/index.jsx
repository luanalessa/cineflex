import React from "react";

import { MovieProvider } from './MovieProvider.js';

function AppProvider({children}) {
  return (
    <MovieProvider>
        {children}
    </MovieProvider>
  );
}

export default AppProvider;