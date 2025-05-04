import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    //Function to update user
    const updateUser = (userData) => {
        setUser(userData);
    }

    //Clear user on logout
    const clearUser = () => {
        setUser(null);
    }

    return <UserContext.Provider value={
        {
            user,
            updateUser,
            clearUser
        }
    }>
        {children}
    </UserContext.Provider>
}

export default UserProvider;