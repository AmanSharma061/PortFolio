import React, { useEffect } from "react";

import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [log, setLog] = React.useState(null);

  return (
    <userContext.Provider value={{ log, setLog }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
