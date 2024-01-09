import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Profile from "../screens/ProfilePage";

import Search from "../screens/Search";
import SearchByPhoto from "../screens/SearchByPhoto";
import ManualSearch from "../screens/ManualSearch";
import Results from "../screens/ResultsPage";
import ItemPage from "../screens/ItemPage";
import Wishlist from "../screens/WishlistPage";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ManualSearch" component={ManualSearch} />
        <Stack.Screen name="SearchByPhoto" component={SearchByPhoto} />

        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
