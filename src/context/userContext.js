import React, { useState } from "react";

const UserContext = React.createContext({
  location: "",
  email: "",
  writeLocation: () => {},
  writeEmail: () => {},
});

export const UserContextProvider = (props) => {
  const [location, setLocation] = useState("");

  const initialMail = localStorage.getItem("email");
  const [email, setEmail] = useState(initialMail);

  const locationHandler = (val) => {
    setLocation(val);
  };
  const emailHandler = (val) => {
    setEmail(val);
    localStorage.setItem("email", val);
  };

  const contextValue = {
    location,
    email,
    writeLocation: locationHandler,
    writeEmail: emailHandler,
  };
  return (
    <>
      <UserContext.Provider value={contextValue}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserContext;
