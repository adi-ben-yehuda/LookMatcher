import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Profile from "../screens/profile/ProfilePage";

import Home from "../screens/Home";
import ItemPage from "../screens/Item/ItemPage";
import search from "../screens/SearchByFoto";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
