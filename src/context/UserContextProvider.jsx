import React, { useContext, useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
    const [dark, setDark] = useState(null)
    return (
        <UserContext.Provider value={{ dark, setDark }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider