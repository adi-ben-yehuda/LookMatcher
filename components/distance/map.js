import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { calculateDistance, fetchLocation, findClosestStore, fetchStores } from "./utils"; // Import utility functions
import { Color, Border } from "../../styles/GlobalStyles";
import BackButton from "../backButton/BackButton";

export default function MapPage() {
  const [location, setLocation] = useState(null);
  const [stores, setStores] = useState([]);
  const [closestStore, setClosestStore] = useState(null);
  const route = useRoute();
  const { store } = route.params;

  useEffect(() => {
    const loadStores = async () => {
      try {
        const data = await fetchStores(store);
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    loadStores();
  }, [store]);

  useEffect(() => {
    const getLocationAndFindClosestStore = async () => {
      const userLocation = await fetchLocation();
      if (userLocation) {
        setLocation(userLocation);
        const closest = findClosestStore(userLocation, stores);
        setClosestStore(closest);
      }
    };

    if (stores.length > 0) {
      getLocationAndFindClosestStore();
    }
  }, [stores]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{store} shops</Text>
      </View>
      <BackButton />
      <MapView
        key={location ? `${location.latitude}-${location.longitude}` : "initialMap"}
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 32.0853,
          longitude: location ? location.longitude : 34.7818,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={
          location && {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        }
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
            pinColor="purple"
          />
        )}

        {stores.map((store) => (
          <Marker
            key={store._id}
            coordinate={{
              latitude: store.latitude,
              longitude: store.longitude,
            }}
            title={store.address}
            pinColor={
              closestStore && closestStore._id === store._id ? "red" : "blue"
            }
          />
        ))}
      </MapView>
    </View>
  );
}

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "85%",
  },
  title: {
    top: 0 - 15,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: screenHeight * 0.03,
    fontWeight: "bold",
    color: Color.darkPurple,
  },
});