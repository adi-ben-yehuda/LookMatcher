import React, { useEffect, useState } from "react";
import { View, Text, Linking } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { fetchLocation, findClosestStore, fetchStores } from "./utils"; // Import utility functions
import BackButton from "../backButton/BackButton";
import styles from "./map.style"; // Import the styles

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

  const initialRegion = closestStore
    ? {
        latitude: closestStore.latitude,
        longitude: closestStore.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : {
        latitude: 32.0853,
        longitude: 34.7818,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  const region = closestStore
    ? {
        latitude: closestStore.latitude,
        longitude: closestStore.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : undefined;

  const openInWaze = (latitude, longitude) => {
    const url = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
    Linking.openURL(url).catch(err => console.error("Error opening Waze:", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{store} shops</Text>
      </View>
      <BackButton />
      <MapView
        key={closestStore ? `${closestStore.latitude}-${closestStore.longitude}` : "initialMap"}
        style={styles.map}
        initialRegion={initialRegion}
        region={region}
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
            pinColor={
              closestStore && closestStore._id === store._id ? "red" : "blue"
            }
          >
            <Callout onPress={() => openInWaze(store.latitude, store.longitude)}>
              <View>
                <Text>{store.address}</Text>
                <Text>Open in Waze</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}