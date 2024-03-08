import React from "react";
import FunDONotes from "./src/FunDoNotes";
import { AuthProvider } from "./src/navigation/AuthProvider";
 
const App = () => {
  return(
    <AuthProvider>
      <FunDONotes/>
    </AuthProvider>
  )
}

export default App;