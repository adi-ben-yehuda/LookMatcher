import React, { createContext, useState, useEffect } from "react";
import { Image } from "react-native";

const UsersContext = createContext({
  addUser: () => {},
  userExists: () => {},
  myProfile: () => {},
  profile: {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [profile, setProfile] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const userExists = (email, password) => {
    return users.some(
      (item) => item.email === email && item.password === password
    );
  };

  const myProfile = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    const updateUser = { ...user, contacts: [] };
    setProfile(updateUser);
  };

  return (
    <UsersContext.Provider
      value={{
        addUser,
        userExists,
        myProfile,
        profile,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
