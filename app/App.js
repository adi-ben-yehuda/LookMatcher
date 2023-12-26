import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Register from "../screens/Register";
import Login from "../screens/Login";

import Home from "../screens/home/Home";
import ItemPage from "../screens/Item/ItemPage";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login" component={ItemPage} />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
