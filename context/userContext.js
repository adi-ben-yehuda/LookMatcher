import React, { createContext, useState, useEffect } from "react";

const UsersContext = createContext({
  addUser: () => {},
  userExists: () => {},
  myProfile: () => {},
  profile: {},
  token: '',
  getToken: () => { },
  setToken: () => { },
 

});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState('');
  const [profile, setProfile] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const date = new Date();
  //     setCurrentTime(date.toLocaleString());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const getToken = (email) => {
    const user = users.find((item) => item.email === email);
    return user.token;
}

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
       
        token,
        addUser,
        userExists,
        myProfile,
        profile,
        getToken,
        setToken,
     
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
