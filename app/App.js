import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UsersProvider } from "../context/userContext.js";
import { Linking } from "react-native";

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
import ChangePass2 from "../screens/Reset2.js";
import ChangePass1 from "../screens/Reset1.js";
import TakePhoto from "../components/uploadPhoto/takePhoto.js";

const Stack = createStackNavigator();

function App() {
  return (
    <UsersProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="ManualSearch" component={ManualSearch} />
          <Stack.Screen name="SearchByPhoto" component={SearchByPhoto} />
          <Stack.Screen name="TakePhoto" component={TakePhoto} />
          <Stack.Screen name="ItemPage" component={ItemPage} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ChangePass1" component={ChangePass1} />
          <Stack.Screen name="ChangePass2" component={ChangePass2} />
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

export default App;
