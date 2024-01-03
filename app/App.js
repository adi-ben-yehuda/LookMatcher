import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Results from "../screens/ResultsPage";

import { createStackNavigator } from "@react-navigation/stack";

import Register from "../screens/Register";
import Login from "../screens/Login";

import Profile from "../screens/profile/ProfilePage";
import SearchByPhoto from "../screens/SearchByPhoto";
import Tool from "../components/toolbar/tool";

import Home from "../screens/Home";
import ItemPage from "../screens/Item/ItemPage";
import Search from "../screens/Search";
import ManualSearch from "../screens/ManualSearch";
import Wishlist from "../screens/WishlistPage";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wishlist" component={Wishlist} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ItemPage" component={ItemPage} />

        <Stack.Screen name="ManualSearch" component={ManualSearch} />
        <Stack.Screen name="SearchByPhoto" component={SearchByPhoto} />

        <Stack.Screen name="Results" component={Results} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;